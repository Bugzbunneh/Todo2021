using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Todo.Data;

namespace Todo.Authorization.Todo
{
    public class MustBeTodoOwnerHandler : AuthorizationHandler<MustBeTodoOwnerRequirement>
    {
        private readonly ITodoRepository _todoRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public MustBeTodoOwnerHandler(ITodoRepository todoRepository, IHttpContextAccessor httpContextAccessor)
        {
            _todoRepository = todoRepository;
            _httpContextAccessor = httpContextAccessor;
        }

        protected async override Task HandleRequirementAsync(AuthorizationHandlerContext context, MustBeTodoOwnerRequirement requirement)
        {
            if (!context.User.Identity.IsAuthenticated)
            {
                context.Fail();
                return;
            }

            var todoId = _httpContextAccessor.HttpContext.Request.RouteValues["todoId"];
            int todoIdAsInt = Convert.ToInt32(todoId);
            var userId = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var todo = await _todoRepository.GetTodo(todoIdAsInt);
            if (todo == null)
            {
                // let it through so the controller can return a 404
                context.Succeed(requirement);
                return;
            }
            if (todo.UserId != userId)
            {
                context.Fail();
                return;
            }
            context.Succeed(requirement);
        }
    }
}
