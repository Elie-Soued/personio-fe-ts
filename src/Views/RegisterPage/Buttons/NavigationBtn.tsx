import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  nextFn: Function;
  prevFn: Function;
  section: string;
}

export default function NagigationBtns({ nextFn, prevFn, section }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div
        className={`col-${section === "Development" ? 12 : 6} d-${
          section === "Public Profile" ? "none" : "block"
        } text-center p-2 `}
      >
        <button
          className="btn btn-primary btn-block fa-lg   active w-10"
          onClick={() => {
            prevFn();
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
      </div>
      <div
        className={`col-${section === "Public Profile" ? 12 : 6} d-${
          section === "Development" ? "none" : "block"
        } text-center p-2 `}
      >
        <button
          className="btn btn-primary btn-block fa-lg  mb-3 active w-10"
          onClick={() => {
            nextFn();
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
      </div>
    </div>
  );
}
