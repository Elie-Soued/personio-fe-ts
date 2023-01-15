import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import {
  HrInformation,
  PersonalData,
  PayrollInformation,
  BankDetails,
  EmergencyContact,
  EmployeeEquipment,
  Development,
} from "./PersonalInfo";

import PublicProfile from "./PublicProfile";
import { useNavigate } from "react-router-dom";
import undersurface from "../../images/undersurface.jpg";

interface ISectionProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

function renderActiveSection(activeSection: string) {
  switch (activeSection) {
    case "Public Profile":
      return <PublicProfile />;
    case "Hr Information":
      return <HrInformation />;
    case "Personal Data":
      return <PersonalData />;
    case "Payroll Information":
      return <PayrollInformation />;
    case "Bank Details":
      return <BankDetails />;
    case "Emergency Contact":
      return <EmergencyContact />;
    case "Employee Equipment":
      return <EmployeeEquipment />;
    case "Development":
      return <Development />;
    default:
      return <div>Please select a section from the navbar</div>;
  }
}

const RegisterPage: React.FC<ISectionProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const sections = [
    "Public Profile",
    "Hr Information",
    "Personal Data",
    "Payroll Information",
    "Bank Details",
    "Emergency Contact",
    "Employee Equipment",
    "Development",
  ];

  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <div
      className="d-flex justify-content-center p-5"
      style={{
        backgroundColor: "#eee",

        height: "100vh",
      }}
    >
      <Row
        className="col-lg-8"
        style={{
          height: "100%",
        }}
      >
        <Col className="p-0 m-0" xs={3} style={{}}>
          <Navbar
            className="w-100"
            bg="secondary"
            variant="dark"
            style={{
              height: "100%",
            }}
          >
            <Nav
              className="flex-column d-flex justify-content-between w-100"
              style={{
                height: "100%",
              }}
            >
              {sections.map((section) => (
                <Nav.Link
                  className="text-center"
                  style={{}}
                  key={section}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
        </Col>
        <Col className="p-0" style={{}} xs={9}>
          {renderActiveSection(activeSection)}
        </Col>
        <div className="col-xl-12 p-0 m-0">
          <div className="col-xl-12">
            <img
              className="w-100"
              src={undersurface}
              style={{ borderRadius: "5px" }}
              alt="footer"
            ></img>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default RegisterPage;
