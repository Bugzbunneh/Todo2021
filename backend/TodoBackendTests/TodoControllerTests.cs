using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Xunit;
using Moq;
using Todo.Controllers;
using Todo.Data;
using Todo.Data.Models.Todo;

namespace TodoBackendTests
{
    public class TodoControllerTests
    {
        [Fact]
        public async void GetTodos_WhenUserParameter_ReturnsAllUsersTodos()
        {
            var mockUserId = "Fake User 1";
            var mockUserIdClaim = new Claim("NameIdentifier", mockUserId);
            var mockTodos = new List<TodoGetManyResponse>();
            for (int i = 0; i < 10; i++)
            {
                mockTodos.Add(new TodoGetManyResponse
                {
                    TodoId = i,
                    Title = $"Test Title {i}",
                    Description = $"Test Description {i}",
                    UserId = mockUserId,
                    DateCreated = new DateTime(),
                    DateCompleted = null,
                    DateDeadline = new DateTime()
                });
            }

            var mockHttpContext = new Mock<HttpContext>();
            mockHttpContext.Setup(http => http.User.FindFirst(ClaimTypes.NameIdentifier)).Returns(mockUserIdClaim);

            var controllerContext = new ControllerContext(new ActionContext(mockHttpContext.Object, new RouteData(), new ControllerActionDescriptor()));

            var mockTodoRepository = new Mock<ITodoRepository>();
            mockTodoRepository
                .Setup(repo => repo.GetTodos(mockUserId))
                .Returns(() => Task.FromResult(mockTodos.AsEnumerable()));

            var mockConfigurationRoot = new Mock<IConfigurationRoot>();
            mockConfigurationRoot.SetupGet(config =>
              config[It.IsAny<string>()]).Returns("some setting");

            var TodoController = new TodoController(
                mockTodoRepository.Object,
                null
            )
            {
                ControllerContext = controllerContext
            };

            var result = await TodoController.GetTodos();
            Assert.Equal(10, result.Count());
            Assert.Contains(result, todo => todo.UserId == mockUserId);
            mockTodoRepository.Verify(mock => mock.GetTodos(mockUserId), Times.Once());
        }
    }
}
