import { useContext } from "react";
import { EmployeeContext } from "./RegisterPage";
import { MDBContainer, MDBRow, MDBCard, MDBCol } from "mdb-react-ui-kit";
import PublicProfile from "./RegisterSections/Public";
import { HrInformation } from "./RegisterSections/HrInformation";
import { PersonalData } from "./RegisterSections/Personal";
import { PayrollInformation } from "./RegisterSections/Payroll";
import { BankDetails } from "./RegisterSections/Bank";
import { EmergencyContact } from "./RegisterSections/Emergency";
import { EmployeeEquipment } from "./RegisterSections/Employee";
import { Development } from "./RegisterSections/Development";

interface ISection {
  name: string;
  attributes: any;
}

export default function Section({ name }: ISection) {
  const context = useContext(EmployeeContext);

  console.log("context in Section :>> ", context);

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
