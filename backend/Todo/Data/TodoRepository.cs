using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;
using Todo.Data.Models.Todo;
using Microsoft.Extensions.Configuration;

namespace Todo.Data
{
    public class TodoRepository : ITodoRepository
    {
        private readonly string _connectionString;

        public TodoRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
        }

        public async Task DeleteTodo(int todoId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                await connection.ExecuteAsync(@"EXEC dbo.Todo_Delete @TodoId = @TodoId",
                  new { TodoId = todoId }
                );
            }
        }

        public async Task<TodoGetSingleResponse> GetTodo(int todoId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var todo = await connection.QueryFirstOrDefaultAsync<TodoGetSingleResponse>(@"EXEC dbo.Todo_GetSingle @TodoId = @TodoId", new { TodoId = todoId });
                return todo;
            }
        }

        public async Task<IEnumerable<TodoGetManyResponse>> GetTodos(string userId)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                return await connection.QueryAsync<TodoGetManyResponse>(@"EXEC dbo.Todo_GetMany @UserId = @UserId", new { UserId = userId });
            }
        }

        public async Task<TodoGetSingleResponse> PostTodo(TodoPostFullRequest todo)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                var todoId = await connection.QueryFirstAsync<int>(@"EXEC dbo.Todo_Post 
                    @Title = @Title, @Description = @Description, 
                    @DateCreated = @DateCreated, @UserId = @UserId, @DateDeadline = @DateDeadline",
                    todo
                );

                return await GetTodo(todoId);
            }
        }

        public async Task<TodoGetSingleResponse> PutTodo(int todoId, TodoPutRequest todo)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                await connection.ExecuteAsync(@"EXEC dbo.Todo_Put 
                    @TodoId = @TodoId, @Title = @Title, @Description = @Description,
                    @DateDeadline = @DateDeadline, @DateCompleted = @DateCompleted",
                  new { TodoId = todoId, todo.Title, todo.Description, todo.DateDeadline, todo.DateCompleted }
                );
                return await GetTodo(todoId);
            }
        }
    }
}
