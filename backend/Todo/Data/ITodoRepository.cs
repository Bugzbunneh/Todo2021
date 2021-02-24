using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todo.Data.Models.Todo;

namespace Todo.Data
{
    public interface ITodoRepository
    {
        Task<TodoGetSingleResponse> GetTodo(int todoId);

        Task<IEnumerable<TodoGetManyResponse>> GetTodos(string userId);

        Task<TodoGetSingleResponse> PostTodo(TodoPostFullRequest todo);

        Task<TodoGetSingleResponse> PutTodo(int todoId, TodoPutRequest todo);

        Task DeleteTodo(int todoId);
    }
}
