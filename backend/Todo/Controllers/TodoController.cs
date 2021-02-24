using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Net.Http;
using System.Text.Json;
using Todo.Data;
using Todo.Data.Models.Todo;
using Todo.Data.Caches;

namespace Todo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _todoRepository;
        private readonly ITodoCache _cache;
        public TodoController(ITodoRepository todoRepository, ITodoCache todoCache)
        {
            _todoRepository = todoRepository;
            _cache = todoCache;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<TodoGetManyResponse>> GetTodos()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return await _todoRepository.GetTodos(userId);
        }

        [Authorize(Policy = "MustBeTodoOwner")]
        [HttpGet("{todoId}")]
        public async Task<ActionResult<TodoGetSingleResponse>> GetTodo(int todoId)
        {
            var todo = _cache.Get(todoId);

            if (todo == null)
            {
                todo = await _todoRepository.GetTodo(todoId);
                if (todo == null)
                {
                    return NotFound();
                }
                _cache.Set(todo);
            }
            return todo;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<TodoGetSingleResponse>> PostTodo(TodoPostRequest todoPostRequest)
        {
            var todo = await _todoRepository.PostTodo(new TodoPostFullRequest 
            { 
                Title = todoPostRequest.Title,
                Description = todoPostRequest.Description,
                DateDeadline = todoPostRequest.DateDeadline,
                UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value,
                DateCreated = DateTime.UtcNow
            });

            return CreatedAtAction(nameof(GetTodo), new { todoId = todo.TodoId }, todo);
        }

        [Authorize(Policy = "MustBeTodoOwner")]
        [HttpPut("{todoId}")]
        public async Task<ActionResult<TodoGetSingleResponse>> PutTodo(int todoId, TodoPutRequest todoPutRequest)
        {
            var todo = await _todoRepository.GetTodo(todoId);

            if (todo == null)
            {
                return NotFound();
            }

            todoPutRequest.Title = string.IsNullOrEmpty(todoPutRequest.Title) ? todo.Title : todoPutRequest.Title;
            todoPutRequest.Description = string.IsNullOrEmpty(todoPutRequest.Description) ? todo.Description : todoPutRequest.Description;
            todoPutRequest.DateDeadline = todoPutRequest.DateDeadline.HasValue ? todoPutRequest.DateDeadline : todo.DateDeadline;
            todoPutRequest.DateCompleted = todoPutRequest.DateCompleted.HasValue ? todoPutRequest.DateCompleted : todo.DateCompleted;

            var savedTodo = await _todoRepository.PutTodo(todoId, todoPutRequest);

            _cache.Remove(todoId);

            return savedTodo;
        }

        [Authorize(Policy = "MustBeTodoOwner")]
        [HttpDelete("{todoId}")]
        public async Task<ActionResult<Boolean>> DeleteTodo(int todoId)
        {
            var todo = await _todoRepository.GetTodo(todoId);

            if (todo == null)
            {
                return NotFound();
            }

            await _todoRepository.DeleteTodo(todoId);

            _cache.Remove(todoId);

            return NoContent();
        }
    }
}
