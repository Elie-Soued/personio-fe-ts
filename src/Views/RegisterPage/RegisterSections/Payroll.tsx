import { MDBRow, MDBCol, MDBInput, MDBRadio } from "mdb-react-ui-kit";

export const PayrollInformation = () => (
  <div
    className="flex-column d-flex justify-content-between w-100"
    style={{
      height: "80%",
    }}
  >
    <MDBRow style={{}}>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Salary type"
          size="lg"
          id="form1"
          type="text"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Tax ID"
          size="lg"
          id="form2"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Social security number"
          size="lg"
          id="form4"
          type="text"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Wage tax class"
          size="lg"
          id="form4"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Children"
          size="lg"
          id="form3"
          type="number"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Child allowance"
          size="lg"
          id="form5"
          type="number"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Mariral status"
          size="lg"
          id="form3"
          type="text"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Religious denomination"
          size="lg"
          id="form5"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Type of health insurrance"
          size="lg"
          id="form3"
          type="text"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Name of health insurrance"
          size="lg"
          id="form5"
          type="text"
        />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Main or secondary occupation"
          size="lg"
          id="form3"
          type="text"
        />
      </MDBCol>

      <MDBCol md="6">
        <MDBInput
          wrapperClass="mb-4"
          label="Wage tax allowance"
          size="lg"
          id="form5"
          type="text"
        />
      </MDBCol>
    </MDBRow>
  </div>
);
