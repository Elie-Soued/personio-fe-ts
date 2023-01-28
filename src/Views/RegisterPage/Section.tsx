import { MDBContainer, MDBRow, MDBCard, MDBCol } from "mdb-react-ui-kit";
import { PublicProfile } from "./RegisterSections/Public";
import { HrInformation } from "./RegisterSections/HrInformation";
import { PersonalData } from "./RegisterSections/Personal";
import { PayrollInformation } from "./RegisterSections/Payroll";
import { BankDetails } from "./RegisterSections/Bank";
import { EmergencyContact } from "./RegisterSections/Emergency";
import { EmployeeEquipment } from "./RegisterSections/Employee";
import { Development } from "./RegisterSections/Development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ISection {
  name: string;
  attributes: any;
}

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

export const Section = ({ name }: ISection) => (
  <MDBContainer
    fluid
    style={{
      backgroundColor: "#eee",
      height: "100%",
    }}
  >
    <MDBRow
      className="justify-content-center align-items-center "
      style={{
        height: "100%",
      }}
    >
      <MDBCard
        className="col-lg-12 p-4"
        style={{
          height: "100%",
        }}
      >
        <h3 className="fw-bold text-center mb-4 pb-2 pb-md-0 mb-md-5 p-3">
          {name}
        </h3>
        <div
          className="flex-column d-flex justify-content-between w-100"
          style={{
            height: "80%",
          }}
        >
          {renderSection(name)}
        </div>

        <MDBRow className="p-2">
          <MDBCol className="col-6 text-center">
            <button className="btn btn-primary btn-block fa-lg  mb-3 active w-10">
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </button>
          </MDBCol>
          <MDBCol className="col-6 text-center">
            <button
              className="btn btn-primary btn-block fa-lg  mb-3 active w-10"
              onClick={() => {
                goToNextPage(name);
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBRow>
  </MDBContainer>
);

const renderSection = (section: string) => {
  switch (section) {
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
      return undefined;
  }
};

const goToNextPage = (section: string) => {
  const index = sections.indexOf(section);
  console.log("sections[index+1] :>> ", sections[index + 1]);
  renderSection(sections[index + 1]);
};
