using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Todo.Authorization.Todo;
using DbUp;
using Todo.Data;
using Todo.Data.Caches;
using DbUp.Helpers;

namespace Todo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            EnsureDatabase.For.SqlDatabase(connectionString);

            var journaledScripts = DeployChanges.To
                .SqlDatabase(connectionString, null)
                .WithScriptsEmbeddedInAssembly(
                  System.Reflection.Assembly.GetExecutingAssembly(), s => !IsAlwaysAppliedScript(s)
                )
                .LogToConsole()
                .WithTransaction()
                .Build();

            if (journaledScripts.IsUpgradeRequired())
            {
                var journaledUpgradeResult = journaledScripts.PerformUpgrade();
                
                if (!journaledUpgradeResult.Successful)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Failure applying rerun scripts!");
                    Console.WriteLine(journaledUpgradeResult.Error);
                    Console.ResetColor();

                    Console.ReadLine();
                }
            }

            var nonJournaledScripts = DeployChanges.To
                .SqlDatabase(connectionString, null)
                .WithScriptsEmbeddedInAssembly(
                  System.Reflection.Assembly.GetExecutingAssembly(), IsAlwaysAppliedScript
                )
                .JournalTo(new NullJournal())
                .LogToConsole()
                .WithTransaction()
                .Build();

            var nonJournaledUpgradeResult = nonJournaledScripts.PerformUpgrade();
            if (!nonJournaledUpgradeResult.Successful)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Failure applying rerun scripts!");
                Console.WriteLine(nonJournaledUpgradeResult.Error);
                Console.ResetColor();

                Console.ReadLine();
            }

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.Authority = Configuration["Auth0:Authority"];
                options.Audience = Configuration["Auth0:Audience"];
            });

            services.AddAuthorization(options => options.AddPolicy("MustBeTodoOwner", policy => policy.Requirements.Add(new MustBeTodoOwnerRequirement())));

            services.AddHttpClient();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Todo", Version = "v1" });
            });

            services.AddScoped<ITodoRepository, TodoRepository>();
            services.AddSingleton<ITodoCache, TodoCache>();
            services.AddScoped<IAuthorizationHandler, MustBeTodoOwnerHandler>();
            services.AddHttpContextAccessor();

            services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
                  builder
                   .AllowAnyMethod()
                   .AllowAnyHeader()
                   .WithOrigins(Configuration["Frontend"])));
        }

        static bool IsAlwaysAppliedScript(string s)
        {
            return s.Contains("rerun");
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Todo v1"));
            }
            else
            {
                app.UseHttpsRedirection();
            }

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
