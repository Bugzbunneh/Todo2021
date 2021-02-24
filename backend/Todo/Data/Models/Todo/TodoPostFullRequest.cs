using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Data.Models.Todo
{
    public class TodoPostFullRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string UserId { get; set; }
        public DateTime? DateDeadline { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
