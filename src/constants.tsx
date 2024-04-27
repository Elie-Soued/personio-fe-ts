import { createContext } from 'react';
import { EmployeeProfileType, EmployeeProfileContextType } from './types';

const sections = [
    'Public Profile',
    'Hr Information',
    'Personal Data',
    'Payroll Information',
    'Bank Details',
    'Emergency Contact',
    'Employee Equipment',
    'Development',
];

const employeeProfileBlank = {
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

const team = [
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

const department = ['Delivery', 'HR', 'Management', 'Platform', 'Sales', 'Finance', 'OPS', 'empty'];

const office = [
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

const positions = [
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

const EmployeeContext = createContext<EmployeeProfileContextType>({
    employee: employeeProfileBlank,
    updateEmployee: (employeeUpdated: EmployeeProfileType) => {},
});

export { sections, employeeProfileBlank, team, department, office, positions, EmployeeContext };
