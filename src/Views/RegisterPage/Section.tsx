import { MDBContainer, MDBRow, MDBCard } from "mdb-react-ui-kit";
import { PublicProfile } from "./RegisterSections/Public";
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
        className="col-lg-12"
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
          <Development />
        </div>
      </MDBCard>
    </MDBRow>
  </MDBContainer>
);
