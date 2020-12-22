using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestApi.Models
{
    public class EntityVm
    {
        [Required]
        public string EmpName { get; set; }
        public decimal EmpSalary { get; set; }
        public int EmpAge { get; set; }
        public string Gander { get; set; }
        public int ManagerId { get; set; }
    }
}