import { w } from "windstitch";
import { EmployeeRegContext } from "../context/employeeRegContext";
import { useContext } from "react";

import EmployeeDescription from "./employeeDescription";
import MainContainer from "./mainContainer";
import AddEmployeeModal from "./addEmployeeModal";

export default function MainContent(){
    const { addEmployee } = useContext(EmployeeRegContext)
    return (
        <WMain>
            <EmployeeDescription/>
           {
                addEmployee ? <AddEmployeeModal/> : <MainContainer/>
           }
        </WMain>
    )
}

const WMain = w.div`
    flex  items-start gap-[34px]  bg-[#F2F2F2] 
`
