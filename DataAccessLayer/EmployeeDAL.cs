using DataAccessLayer;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BusineesAccessLayer
{
    public class EmployeeDAL
    {
        DatabaseContext _context = new DatabaseContext();

        public List<Employee> GetAllEmployee()
        {
            return _context.Employees.ToList();
        }

        public List<Employee> GetEmployeeByID(int ID)
        {
            List<Employee> empCol = new List<Employee>();
            var empObj = _context.Employees.ToList().Find(x => x.EmpID == ID);
            if (empObj != null)
            {
                empCol.Add(empObj);
                return empCol;
            }
            //if id does not match will return all employee
            return _context.Employees.ToList();
        }

        //for search bar method 
        public Employee SearchEmployeeById(int ID)
        {
            var empObj = _context.Employees.Find(ID);
            return empObj;
        }

        public List<Employee> GetEmployeeByName(string name)
        {
            var empObj =  _context.Employees.Where(emp => emp.EmpName != null &&
            emp.EmpName.ToLower().Contains(name.ToLower())).ToList();
            return empObj;
        }

        public int AddEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            var count = _context.SaveChanges();
            return count;
        }

        public void UpdateEmployee(Employee employee)
        {
            _context.Entry(employee).State = System.Data.Entity.EntityState.Modified;
            _context.SaveChanges();
        }

        public int DeleteEmployee(int ID)
        {
            var employee = _context.Employees.Find(ID);
            if (employee != null)
            {
                _context.Employees.Remove(employee);
                var count = _context.SaveChanges();
                return count;
            }
            else return 0;
        }
    }
}
