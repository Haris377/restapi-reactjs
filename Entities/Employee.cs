using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Employee
    {
        [Key]
        public int EmpID { get; set; }

        [Required]
        public string EmpName { get; set; }

        [Required]
        public decimal EmpSalary { get; set; }

        [Required]
        [Range(20, 40)]
        public int EmpAge { get; set; }

        [Required]
        public string Gander { get; set; }

        [Required]
        public DateTime EmpJoiningDate { get; set; }

        [Required]
        public int ManagerId { get; set; }
    }
}
