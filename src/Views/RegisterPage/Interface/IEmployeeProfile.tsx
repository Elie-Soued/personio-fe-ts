export type IEmployeeProfile = {
    public: {
        firstName: string;
        lastName: string;
        userName: string;
        password: string;
        gender: string;
        email: string;
        companyPhoneNumber: string;
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
        occupationType: string;
        supervisor: string;
        hireDate: string;
        contractEnd: string;
        lengthOfProbation: string;
        noticePeriod: string;
        weeklyHours: string;
        costCenter: string;
        nationality: string;
        residentPermitValidUntil: string;
    };

    personalData: {
        streetAndHouseNumber: string;
        postalCode: string;
        city: string;
        privateEmail: string;
        privatePhone: string;
    };

    payrollInformation: {
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
        emergencyName: string;
        emergencyNumber: string;
    };

    employeeEquipment: {
        notebook: string;
        cellPhone: string;
    };

    development: {
        training: string;
    };
};
