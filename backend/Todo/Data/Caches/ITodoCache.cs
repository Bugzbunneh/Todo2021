using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todo.Data.Models.Todo;

namespace Todo.Data.Caches
{
    public interface ITodoCache
    {
        TodoGetSingleResponse Get(int id);
        void Set(TodoGetSingleResponse entity);
        void Remove(int id);
        
    }
}
