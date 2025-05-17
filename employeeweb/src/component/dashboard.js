import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employee");
        const data = await response.json();
        setEmployees(data);
      }
      catch (error) {
        console.log("Error creating employee:", error.message);
      }
    }
    fetchEmployee();
  }, [])

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Employee with ID ${employeeId} deleted successfully`);
        setEmployees(employees.filter((emp) => emp.id !== employeeId)); // Update state
      } else {
        console.log("Failed to delete employee.");
      }
    } catch (error) {
      console.log("Error deleting employee:", error.message);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Employee</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.department}</td>
                    <td>
                      <Button variant="warning" size="sm" className="me-2">Edit</Button>
                      <Button variant="danger" size="sm" onClick={() => handleDelete(emp.id)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard
