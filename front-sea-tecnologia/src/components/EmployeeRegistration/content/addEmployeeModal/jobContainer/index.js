import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext";
import { useContext, useState } from "react";

import Header from "./header";
import AddJobContainer from "./addJobContaner";


export default function JobContainer(){
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    const [ employeeEPI, setEmployeeEPI ] = useState(true)
    const [ jobsList, setJobsList ] = useState([0])
    return (
        <WJobContainer>
          <Header/>
          <AddJobContainer />
        
        </WJobContainer>
    )
}


const WJobContainer = w.div`
    flex flex-col items-left  bg-white  w-[702px] border-[1px] 
    border-primaryBlue rounded-[10px] pl-[13px] mt-[26px]  pt-[13px] pr-[8px] pb-[14px]
`

