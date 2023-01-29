import { createContext } from "react";
import { IEmployeeProfile } from "./Interface/IEmployeeProfile";
import { employeeProfileBlank } from "./Constants/Constants";

type EmployeeProfileContext = {
  employee: IEmployeeProfile;
  updateEmployee: (employeeUpdated: IEmployeeProfile) => void;
};

export const EmployeeContext = createContext<EmployeeProfileContext>({
  employee: employeeProfileBlank,
  updateEmployee: (employeeUpdated: IEmployeeProfile) => {},
});
