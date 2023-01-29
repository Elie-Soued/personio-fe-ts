import { MDBContainer, MDBRow, MDBCard, MDBCol } from "mdb-react-ui-kit";
import PublicProfile from "./Public";
import HrInformation from "./HrInformation";
import PersonalData from "./Personal";
import PayrollInformation from "./Payroll";
import BankDetails from "./Bank";
import EmergencyContact from "./Emergency";
import EmployeeEquipment from "./Employee";
import Development from "./Development";

interface ISection {
  name: string;
  attributes: any;
}

export default function Section({ name }: ISection) {
  return (
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
            minHeight: "805px",
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
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

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
