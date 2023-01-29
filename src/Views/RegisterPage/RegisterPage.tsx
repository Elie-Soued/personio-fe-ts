import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

import { IEmployeeProfile } from "./Interface/IEmployeeProfile";
import { employeeProfileBlank, sections } from "./Constants/Constants";
import { EmployeeContext } from "./EmployeeContext";

import Section from "./RegisterSections/Section";
import NagigationBtns from "./Buttons/NavigationBtn";
import FooterBtns from "./Buttons/FooterBtns";

import undersurface from "../../images/undersurface.jpg";
import king from "../../images/king.jpg";

export default function RegisterPage() {
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(sections[index]);
  const [employee, setEmployee] =
    useState<IEmployeeProfile>(employeeProfileBlank);

  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
  };

  const goToPreviousPage = useCallback(() => {
    if (index === 0) {
      return;
    }
    setIndex((prevIndex) => prevIndex - 1);
  }, [index, setIndex]);

  const goToNextPage = useCallback(() => {
    if (index === 7) {
      return;
    }
    setIndex((prevIndex) => prevIndex + 1);
  }, [index, setIndex]);

  useEffect(() => {
    function handleKeyPress(event: any) {
      if (event.key === "ArrowRight") {
        goToNextPage();
      } else if (event.key === "ArrowLeft") {
        goToPreviousPage();
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    setActiveSection(sections[index]);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [index, goToNextPage, goToPreviousPage]);

  const updateEmployee = (newEmployee: IEmployeeProfile) => {
    setEmployee(newEmployee);
  };
  return (
    <EmployeeContext.Provider value={{ employee, updateEmployee }}>
      <div
        className="p-0"
        style={{
          backgroundColor: "#eee",
          border: "4px solid white",
          height: "100%",
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
              <div className=" w-100">
                {renderActiveSection(activeSection)}

                <NagigationBtns
                  nextFn={goToNextPage}
                  prevFn={goToPreviousPage}
                  section={activeSection}
                ></NagigationBtns>
              </div>
            </div>

            <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="d-flex flex-column  align-items-center gradient-custom-2 h-100">
                <img
                  className="w-100"
                  src={king}
                  style={{ borderRadius: "5px" }}
                  alt="King"
                ></img>
                <FooterBtns backToLoginFn={backToLogin}></FooterBtns>
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
    </EmployeeContext.Provider>
  );
}

function renderActiveSection(activeSection: string) {
  return <Section name={activeSection} attributes />;
}
