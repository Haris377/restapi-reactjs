import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { useForm } from "react-hook-form";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

function EditEmployee(props) {
  const { errors } = useForm();
  const [employee, setemployee] = useState({
    EmpID: "",
    EmpName: "",
    EmpAge: "",
    EmpSalary: "",
    Gander: "",
    Manager: "",
  });

  const {
    match: { params },
  } = props;

  const Url = `https://localhost:44360/api/employee/searchById/${params.id}`;
  const ApiUrl = "https://localhost:44360/api/employee/Edit";

  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get(Url);
      setemployee(result.data);
    };
    GetData();
  }, []);

  const UpdateEmployee = (e) => {
    e.preventDefault();
    const data = {
      EmpID: props.match.params.id,
      EmpName: employee.EmpName,
      EmpAge: employee.EmpAge,
      EmpSalary: employee.EmpSalary,
      Gander: employee.Gander,
      ManagerId: employee.ManagerId,
      EmpJoiningDate: new Date(),
    };
    axios.post(ApiUrl, data).then((result) => {
      props.history.push("/EmployeeList");
      swal("Record updated", "successfully");
    });
  };
  const onChange = (e) => {
    e.persist();
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onClickSave = () => {
    props.history.push("/EmployeeList");
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={UpdateEmployee}>
                  <h1>Update Employee</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="EmpName"
                      id="Name"
                      placeholder="Name"
                      value={employee.EmpName}
                      onChange={onChange}
                      required
                    />
                    {errors.EmpName && 'name is required.'}
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Salary"
                      name="EmpSalary"
                      id="salary"
                      value={employee.EmpSalary}
                      onChange={onChange}
                      required
                    />
                    {errors.EmpSalary && 'Salary is required.'}
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="Age"
                      name="EmpAge"
                      id="Age"
                      value={employee.EmpAge}
                      onChange={onChange}
                      required
                    />
                    {errors.EmpAge && 'Age is required.'}
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="Gander"
                      name="Gander"
                      id="Gander"
                      value={employee.Gander}
                      onChange={onChange}
                      required
                    />
                    {errors.Gander && ' is required.'}
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="ManagerId"
                      name="ManagerId"
                      id="ManagerId"
                      value={employee.ManagerId}
                      onChange={onChange}
                      required
                    />
                    {errors.ManagerId && 'is required.'}
                  </InputGroup>
                  {/* <DayPicker onDayClick={(day) => setDay({ day })} /> */}
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          onClick={UpdateEmployee}
                          type="button"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button
                          type="button"
                          onClick={onClickSave}
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditEmployee;
