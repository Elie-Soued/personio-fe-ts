import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import undersurface from "../../images/undersurface.jpg";
import king from "../../images/king.jpg";
import { Section } from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MDBContainer } from "mdb-react-ui-kit";

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

export default function RegisterPage() {
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(sections[index]);

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

  return (
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

              {/**Here is the button section */}

              <div className="d-flex justify-content-center">
                <div className="col-6 text-center p-2">
                  <button
                    className="btn btn-primary btn-block fa-lg   active w-10"
                    onClick={() => {
                      goToPreviousPage();
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                  </button>
                </div>
                <div className="col-6 text-center p-2">
                  <button
                    className="btn btn-primary btn-block fa-lg  mb-3 active w-10"
                    onClick={() => {
                      goToNextPage();
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </button>
                </div>
              </div>
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
}

function renderActiveSection(activeSection: string) {
  return <Section name={activeSection} attributes />;
}
