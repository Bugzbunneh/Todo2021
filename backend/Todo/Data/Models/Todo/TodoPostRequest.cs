using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Todo.Data.Models.Todo
{
    public class TodoPostRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DateDeadline { get; set; }
    }
}
