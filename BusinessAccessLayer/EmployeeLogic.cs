using BusineesAccessLayer;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer
{

    public interface IEmployee
    {
        List<Employee> GetAllEmployee();
        List<Employee> GetEmployeeByID(int ID);
        Employee SearchEmployeeById(int ID);
        List<Employee> GetEmployeeByName(string name);
        int AddEmployee(Employee employee);
        void UpdateEmployee(Employee employee);
        int DeleteEmployee(int ID);
    }

    public class EmployeeLogic : IEmployee
    {
        EmployeeDAL employeeDAL = new EmployeeDAL();

        public List<Employee> GetAllEmployee()
        {
            return employeeDAL.GetAllEmployee();
        }

        public List<Employee> GetEmployeeByID(int ID)
        {
            return employeeDAL.GetEmployeeByID(ID);
        }

        public Employee SearchEmployeeById(int ID)
        {
            return employeeDAL.SearchEmployeeById(ID);
        }

        public List<Employee> GetEmployeeByName(string name)
        {
            return employeeDAL.GetEmployeeByName(name);
        }

        public int AddEmployee(Employee employee)
        {
            return employeeDAL.AddEmployee(employee);
        }

        public void UpdateEmployee(Employee employee)
        {
            employeeDAL.UpdateEmployee(employee);
        }

        public int DeleteEmployee(int ID)
        {
            return employeeDAL.DeleteEmployee(ID);
        }

    }
}
