export type employeeProfileInterface = {
  public: {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    companyPhoneNumb: string;
    office: string;
    department: string;
    position: string;
    team: string;
    linkedIn: string;
    birthday: string;
    phoneNumber: string;
  };

  hrInformation: {
    status: string;
    employmentType: string;
    supervisor: string;
    hireDate: string;
    contractEnd: string;
    lengthOfProbation: string;
    noticePeriod: string;
    weeklyHours: string;
    costCenter: string;
    nationality: string;
    residentPermitValidUntil: string;
    enrollementCertificateValidUntil: string;
  };

  PersonalData: {
    streetAndHouseNumber: string;
    postalCode: string;
    city: string;
    privateEmail: string;
    privatePhone: string;
  };

  PayrollInformation: {
    salaryType: string;
    taxID: string;
    socialSecurityNumber: string;
    wageTaxClass: string;
    children: string;
    childAllowance: string;
    maritalStatus: string;
    religiousDenomination: string;
    typeOfHealthInsurance: string;
    nameOfHealthInsurance: string;
    mainOrSecondaryOccupation: string;
    wagetaxAllowance: string;
  };

  bankDetails: {
    holderOfBankAccount: string;
    iban: string;
    bic: string;
  };

  emergencyContact: {
    emergencyContact: string;
  };

  employeeEquipment: {
    notebook: string;
    cellPhone: string;
  };

  development: {
    training: string;
  };
};
