using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessAccessLayer;
using Entities;
using System.Web.Http.Cors;

namespace RestApi.Controllers
{
    [EnableCors("*", "*", "*")]

    [RoutePrefix("api/employee")]
    public class EmployeeController : ApiController
    {
        private readonly IEmployee employeeLogic;

        public EmployeeController(IEmployee _employeeLogic)
        {
            employeeLogic = _employeeLogic;
        }

        //EmployeeLogic employeeLogic = new EmployeeLogic();

        #region test api controller
        [Route("index")]
        [HttpGet]
        public string Index()
        {
            return "Index Action In Employee Controller";
        }
        #endregion

        #region get all employee
        //get employee list
        [Route("GetEmployeeList")]
        [HttpGet]
        public List<Employee> GetAllEmployee()
        {
            var empObj = employeeLogic.GetAllEmployee();
            return empObj;
        }
        #endregion

        #region search employee by id controller
        // method for search bar get employee by id
        [HttpGet]
        [Route("searchById/{id}")]
        public Employee SearchEmployeeById(int id)
        {
            var empObj = employeeLogic.SearchEmployeeById(id);
            return empObj;
        }
        #endregion

        #region get employee by id controller
        //get employee by id, if id not match will return all record
        [HttpGet]
        [Route("getById/{id}")]
        public List<Employee> GetEmployeeById(int id)
        {
            var empObj = employeeLogic.GetEmployeeByID(id);
            return empObj;
        }
        #endregion

        #region get employee by name controller
        //get employee by name 
        [HttpGet]
        [Route("getByName/{name}")]
        public List<Employee >GetEmployeeByName(string name)
        {
            var empObj = employeeLogic.GetEmployeeByName(name);
            return empObj;
        }
        #endregion

        #region create employee controller
        //add record in database table
        [Route("Create")]
        [HttpPost]
        public string CreateEmployee([FromBody] Models.EntityVm employee)
        {
            var empObj = new Employee
            {
                EmpJoiningDate = DateTime.Now,
                EmpName = employee.EmpName,
                EmpSalary = employee.EmpSalary,
                ManagerId = employee.ManagerId,
                EmpAge = employee.EmpAge,
                Gander = employee.Gander
            };

            if (employeeLogic.AddEmployee(empObj) > 0)
                return "Success";
            else
                return "Failed";
        }
        #endregion

        #region update employee controller
        //update record
        [HttpPost]
        [Route("Edit")]
        public void UpdateEmployee(Employee employee)
        {
            employeeLogic.UpdateEmployee(employee);
        }
        #endregion

        #region delete employee by id controller
        //delete record
        [Route("delete/{id}")]
        [HttpPost]
        public string DeleteEmployee(int id)
        {
            if (employeeLogic.DeleteEmployee(id) > 0)
                return "Record Deleted Successfully";
            else
                return "No Record with this Id";
        }
        #endregion
    }
}
