import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import validator from 'validator';
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
function AddEmployee(props) {

    // function is for validation
    const required = (value) => {
        if (!value.toString().trim().length) {
          // We can return string or jsx as the 'error' prop for the validated Component
          return 'require';
        }
      };

      //initialize employee
  const [employee, setemployee] = useState({
    EmpName: "",
    EmpAge: "",
    EmpSalary: "",
    Gander: "",
    Manager: "",
});

const apiUrl = "https://localhost:44360/api/employee/Create";

const Insertemployee = (e) => {
    e.preventDefault();
    const data = {
    EmpName: employee.EmpName,
    EmpAge: employee.EmpAge,
    EmpSalary: employee.EmpSalary,
    Gander: employee.Gander,
    ManagerId: employee.ManagerId,
    };
    axios.post(apiUrl, data)
    .then((result) => {
    swal("Record inserted!", "successfully");
    props.history.push("/EmployeeList");
    });
};
    // form to cancel event
const onClickCancel = () => {
    props.history.push("/EmployeeList");
};

    // to fill the text bar
const onChange = (e) => {
    e.persist();
    setemployee({ ...employee, [e.target.name]: e.target.value });
};

return (
    <div className="app flex-row align-items-center">
    <Container>
        <Row className="justify-content-center">
        <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
            <CardBody className="p-4">
                <Form onSubmit={AddEmployee}>
                <h1>Register</h1>
                <InputGroup className="mb-3">
                    <Input
                    validations={required}
                    type="text"
                    name="EmpName"
                    id="Name"
                    placeholder="Name"
                    value={employee.EmpName}
                    onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Input
                    type="text"
                    placeholder="Salary"
                    name="EmpSalary"
                    id="Salary"
                    value={employee.EmpSalary}
                    onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Input
                    type="text"
                    placeholder="Age"
                    name="EmpAge"
                    id="Age"
                    max="40"
                    value={employee.EmpAge}
                    onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-4">
                    <Input
                    type="text"
                    placeholder="Gander"
                    name="Gander"
                    id="Gander"
                    value={employee.Gander}
                    onChange={onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-4">
                    <Input
                    type="text"
                    placeholder="ManagerId"
                    name="ManagerId"
                    id="ManagerId"
                    value={employee.ManagerId}
                    onChange={onChange}
                    />
                </InputGroup>
                <CardFooter className="p-4">
                    <Row>
                    <Col xs="12" sm="6">
                        <Button 
                        onClick={Insertemployee}
                        className="btn btn-info mb-1"
                        block
                        >
                        <span>Save</span>
                        </Button>
                    </Col>
                    <Col xs="12" sm="6">
                        <Button
                        onClick={onClickCancel}
                        className="btn btn-info mb-1" block>
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
export default AddEmployee;
