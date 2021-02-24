using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Todo.Data.Models.Todo;

namespace Todo.Data.Caches
{
    public class TodoCache : ITodoCache
    {
        private MemoryCache _cache { get; set; }
        public TodoCache()
        {
            _cache = new MemoryCache(new MemoryCacheOptions
            {
                SizeLimit = 100
            });
        }

        private string GetCacheKey(int todoId) => $"Todo-{todoId}";

        public TodoGetSingleResponse Get(int id)
        {
            TodoGetSingleResponse todo;
            _cache.TryGetValue(GetCacheKey(id), out todo);
            return todo;
        }

        public void Set(TodoGetSingleResponse entity)
        {
            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSize(1);
            _cache.Set(GetCacheKey(entity.TodoId), entity, cacheEntryOptions);
        }

        public void Remove(int id)
        {
            _cache.Remove(GetCacheKey(id));
        }
    }
}
