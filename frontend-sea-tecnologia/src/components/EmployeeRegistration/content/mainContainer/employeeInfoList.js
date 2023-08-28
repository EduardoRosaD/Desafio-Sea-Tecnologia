import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

import EmployeeInfo from "./employeeInfo";


export default function EmployeeInfoList() {
    const { employeesListState } = useContext(EmployeeRegContext)

    return (
    <WEmployeeList>

        {employeesListState.map((employee) => (
            <EmployeeInfo employee={employee} key={employee.cpf} />
        ))}
        
    </WEmployeeList>
    )
}


const WEmployeeList = w.div`
    flex flex-col items-center justify-start gap-[14px] w-[734px] h-[182px] overflow-y-scroll mt-[20px] mb-[34px]
`