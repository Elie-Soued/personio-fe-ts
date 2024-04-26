import { createContext } from 'react';

export const sections = [
    'Public Profile',
    'Hr Information',
    'Personal Data',
    'Payroll Information',
    'Bank Details',
    'Emergency Contact',
    'Employee Equipment',
    'Development',
];

export const employeeProfileBlank = {
    public: {
        first_name: '',
        last_name: '',
        user_name: '',
        password: '',
        gender: '',
        email: '',
        company_phone_number: '',
        office: '',
        department: '',
        position: '',
        team: '',
        linked_in: '',
        birthday: '',
        phone_number: '',
    },

    hrInformation: {
        status: '',
        employment_type: '',
        occupation_type: '',
        supervisor: '',
        hire_date: '',
        contract_end: '',
        length_of_probation: '',
        notice_period: '',
        weekly_hours: '',
        cost_center: '',
        nationality: '',
        resident_permit_valid_until: '',
    },

    personalData: {
        street_and_house_number: '',
        postal_code: '',
        city: '',
        private_email: '',
        private_phone: '',
    },

    payrollInformation: {
        salary_type: '',
        tax_id: '',
        social_security_number: '',
        wage_tax_class: '',
        children: '',
        child_allowance: '',
        marital_status: '',
        religious_denomination: '',
        type_of_health_insurance: '',
        name_of_health_insurance: '',
        main_or_secondary_occupation: '',
        wage_tax_allowance: '',
    },

    bankDetails: {
        holder_of_bank_account: '',
        iban: '',
        bic: '',
    },

    emergencyContact: {
        emergency_name: '',
        emergency_number: '',
    },

    employeeEquipment: {
        notebook: '',
        cell_phone: '',
    },

    development: {
        training: '',
    },
};

export const team = [
    'Test Automation',
    'Backend',
    'Frontend',
    'BIZ',
    'OPS',
    'HR',
    'Management',
    'PAM',
    'Finance',
    'Content & Communication',
    'Test Experts',
    'empty',
];

export const department = ['Delivery', 'HR', 'Management', 'Platform', 'Sales', 'Finance', 'OPS', 'empty'];

export const office = [
    'Würzburg(Germany)',
    'Accra (Ghana)',
    'Sagamu (Nigeria)',
    'Yaounde(Cameroun)',
    'Cologne (Germany)',
    'Lagos(Nigeria)',
    'Munich(Germany)',
    'Khartoum (Sudan)',
    'Remote',
    'Istantbul(Turkey)',
    'Berlin (Germany)',
    'Frankfurt (Germany)',
    'Ahlden (Germany)',
    'Nürnberg (Germany)',
    'Beirut (Lebanon)',
    'Stutgart (Germany)',
];

export const positions = [
    'Working Student Software Developer',
    'Working Student Presales',
    'Working Student Junior Software Developer',
    'Working Student  Javascript',
    'Working Student  Frontend Developer',
    'Working Student  Business Analyst',
    'Working Student Software Testing',
    'Technical Writer',
    'Software Testing',
    'Software Developer',
    'Software Architect',
    'Social Media Coordinator',
    'Senior System Engineer',
    'Senior Software Developer',
    'Senior Jakarta EE Developer',
    'Senior Frontend Developer',
    'Senior Consultatn (Claims Expert)',
    'Senior Business Analyst',
    'Senior Business Analyst/Product Owner',
    'Quality Manager',
    'Project Manager/ Business Analyst',
    'Project Manager/ Agile Coach Testing',
    'Management Consultant',
    'Junior Tester',
    'Junior Software Tester',
    'Junior Software Developer',
    'Junior Software Developer Java',
    'Junior Software Developer (Frontend)',
    'Junior Scrum Master',
    'Junior HR Manager',
    'Junior Devops Engineer',
    'Junior Business Analyst',
    'Intern',
    'Human Ressources Manager',
    'Database Administrator',
    'Community & Content Manager',
    'Cloud Native Java Developer',
    'Cleaning Staff',
];

export type EmployeeProfileInterface = {
    public: {
        first_name: string;
        last_name: string;
        user_name: string;
        password: string;
        gender: string;
        email: string;
        company_phone_number: string;
        office: string;
        department: string;
        position: string;
        team: string;
        linked_in: string;
        birthday: string;
        phone_number: string;
    };

    hrInformation: {
        status: string;
        employment_type: string;
        occupation_type: string;
        supervisor: string;
        hire_date: string;
        contract_end: string;
        length_of_probation: string;
        notice_period: string;
        weekly_hours: string;
        cost_center: string;
        nationality: string;
        resident_permit_valid_until: string;
    };

    personalData: {
        street_and_house_number: string;
        postal_code: string;
        city: string;
        private_email: string;
        private_phone: string;
    };

    payrollInformation: {
        salary_type: string;
        tax_id: string;
        social_security_number: string;
        wage_tax_class: string;
        children: string;
        child_allowance: string;
        marital_status: string;
        religious_denomination: string;
        type_of_health_insurance: string;
        name_of_health_insurance: string;
        main_or_secondary_occupation: string;
        wage_tax_allowance: string;
    };

    bankDetails: {
        holder_of_bank_account: string;
        iban: string;
        bic: string;
    };

    emergencyContact: {
        emergency_name: string;
        emergency_number: string;
    };

    employeeEquipment: {
        notebook: string;
        cell_phone: string;
    };

    development: {
        training: string;
    };
};

export type EmployeeProfileContext = {
    employee: EmployeeProfileInterface;
    updateEmployee: (employeeUpdated: EmployeeProfileInterface) => void;
};

export const EmployeeContext = createContext<EmployeeProfileContext>({
    employee: employeeProfileBlank,
    updateEmployee: (employeeUpdated: EmployeeProfileInterface) => {},
});

export type PersonalInfoInterface = {
    name: string;
    showTitle?: boolean;
    context: EmployeeProfileInterface;
    readOnly: boolean;
};

export interface NavigationBtnsInterface {
    nextFn: Function;
    prevFn: Function;
    section: string;
}

export interface FooterBtnsInterface {
    backToLoginFn: Function;
    clearContext: Function;
}

export interface SuccessModalInterface {
    show: boolean;
    handleClose: () => void;
    navigateDashboard: () => void;
}