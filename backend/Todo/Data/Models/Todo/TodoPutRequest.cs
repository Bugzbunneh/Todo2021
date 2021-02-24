using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Data.Models.Todo
{
    public class TodoPutRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DateDeadline { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}
