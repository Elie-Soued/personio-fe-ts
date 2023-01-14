import React from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";

import undersurface from "./images/undersurface.jpg";
import responsability from "./images/responsability.jpg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: "#eee",
        border: "4px solid white",
        height: "100vh",
      }}
    >
      <MDBContainer
        className="my-5 gradient-form h-auto"
        style={{
          backgroundColor: "white",
          width: "auto",
          padding: 0,
        }}
      >
        <div className="row g-0">
          <div className="col-lg-6 p-4">
            <div className="d-flex flex-column ms-5">
              <div className="text-center " id="title">
                <h4 className="mt-1 mb-5 pb-1">
                  <span id="my">My</span> tech11
                </h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-1"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2" id="signin">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className="mx-2" color="secondary">
                  Create your Account
                </MDBBtn>
              </div>
            </div>
          </div>

          <div className="rounded-top col-lg-6 d-flex align-items-center gradient-custom-2">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100">
              <div className="h-100">
                <img
                  className="w-100"
                  src={responsability}
                  style={{ borderRadius: "5px" }}
                  alt="loginImage"
                ></img>
              </div>
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

export default App;
