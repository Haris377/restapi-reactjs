using Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext() : base("EmployeeDbConnection")
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
