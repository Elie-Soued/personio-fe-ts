import React, { useState } from "react";
import { Row, Col, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import undersurface from "../../images/undersurface.jpg";
import passion from "../../images/passion.jpg";
import king from "../../images/king.jpg";
import responsability from "../../images/responsability.jpg";
import { Section } from "./Section";
import { MDBContainer } from "mdb-react-ui-kit";
interface ISectionProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

function renderActiveSection(activeSection: string) {
  return <Section name={activeSection} attributes />;
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

  console.log(activeSection);

  return (
    <div
      className="p-0"
      style={{
        backgroundColor: "#eee",
        border: "4px solid white",
        height: "100vh",
      }}
    >
      <MDBContainer
        className="my-0 gradient-form h-auto"
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: 0,
        }}
      >
        <div className="row g-0">
          <div className="d-flex align-items-center col-lg-6 ">
            <div className="d-flex flex-column w-100">
              {renderActiveSection(activeSection)}
            </div>
          </div>

          <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
            <div className="d-flex align-items-center gradient-custom-2 h-100">
              <img
                className="w-100"
                src={king}
                style={{ borderRadius: "5px" }}
                alt="King"
              ></img>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="col-xl-12">
            <img
              className="w-100"
              src={undersurface}
              style={{ borderRadius: "5px" }}
              alt="footer"
            ></img>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default RegisterPage;
