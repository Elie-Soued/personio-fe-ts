import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext";

interface Props {
  backToLoginFn: Function;
}

export default function FooterBtns({ backToLoginFn }: Props) {
  const { employee } = useContext(EmployeeContext);

  const showContext = () => {
    console.log(employee, "employee in footer");
  };

  return (
    <div className=" d-flex flex-column  justify-content-center  pt-1 mb-5 pb-1 col-12 h-25">
      <div className="d-flex justify-content-around p-2 ">
        <button
          className="btn btn-primary btn-block fa-lg  mb-3 active w-10"
          type="button"
          onClick={() => {
            backToLoginFn();
          }}
        >
          Go Back to Log in
        </button>
        <button
          className="btn btn-secondary btn-block fa-lg  mb-3  w-10"
          type="button"
          onClick={() => {
            showContext();
          }}
        >
          Create Profile
        </button>
      </div>
    </div>
  );
}
