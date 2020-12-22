import React from "react";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function EmployeeList(props) {
  var [data, setData] = useState([]);

  //Search item Code
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get(
        "https://localhost:44360/api/employee/GetEmployeeList"
      );
      setData(result.data);
    };
    GetData();
  }, []);

  const deleteeployee = (id) => {
    axios
      .post(`https://localhost:44360/api/employee/delete/${id}`)
      .then((result) => {
        props.history.push("/EmployeeList");
      });
  };

  const editemployee = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };

  const onValueChange = (e) => {
    setOption(e.target.value);
  };

  const submitForm = (e) => {
    if (option === "getById") {
      axios
        .get(`https://localhost:44360/api/employee/getById/${searchTerm}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } else if (option === "getByName") {
      axios
        .get(`https://localhost:44360/api/employee/getByName/${searchTerm}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>

            <CardBody>
              <table class="table table-sm table-bordered table-striped table-hover">
                <tr>
                  <td className="rdFlex">
                    <div class="radio">
                      <label>
                        <input
                          type="radio"
                          value="getByName"
                          checked={option === "getByName"}
                          onChange={onValueChange}
                        />
                        Search by Name
                      </label>
                    </div>
                    <span className="margin" />
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="getById"
                          checked={option === "getById"}
                          onChange={onValueChange}
                        />
                        Search by ID
                      </label>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <input
                      className="searchBar"
                      onChange={(e) => setSearchTerm(e.target.value)}
                      value={searchTerm}
                      type="text"
                      placeholder="Search"
                    />
                  </td>
                  <td>
                    <button
                      class="btn btn-warning"
                      type="submit"
                      onClick={submitForm}
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </table>
            </CardBody>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>Gander</th>
                    <th>Manager ID</th>
                    <th>Joining Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.EmpID}</td>
                        <td>{item.EmpName}</td>
                        <td>{item.EmpSalary}</td>
                        <td>{item.EmpAge}</td>
                        <td>{item.Gander}</td>
                        <td>{item.ManagerId}</td>
                        <td>{item.EmpJoiningDate}</td>
                        <td>
                          <div class="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editemployee(item.EmpID);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                              deleteeployee(item.EmpID);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default EmployeeList;
