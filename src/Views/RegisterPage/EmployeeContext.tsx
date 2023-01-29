import { createContext } from "react";
import { employeeProfileInterface } from "./Interface/IEmployeeProfile";
import { employeeProfileBlank } from "./Constants/Constants";

type EmployeeProfileContext = {
  employee: employeeProfileInterface;
  updateEmployee: (newEmployee: employeeProfileInterface) => void;
};

export const EmployeeContext = createContext<EmployeeProfileContext>({
  employee: employeeProfileBlank,
  updateEmployee: (newEmployee: employeeProfileInterface) => {},
});
