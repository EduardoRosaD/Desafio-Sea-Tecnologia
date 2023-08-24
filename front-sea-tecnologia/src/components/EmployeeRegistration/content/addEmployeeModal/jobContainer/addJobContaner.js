import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext";
import { useContext, useState } from "react";

import AddJob from "./addJob";

export default function AddJobContainer(){
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    const [ jobsList, setJobsList ] = useState([ 0,])

     function handleJobsList(e){
        e.preventDefault()
        setJobsList([...jobsList, jobsList.length])
    }

    return (
        <WJobContainer>
            {jobsList.map((job, index) => (
                <AddJob key={index} index={index}/>
            ))}
          <WNewJobButton onClick={(e) => handleJobsList(e)}>Adicionar nova atividade</WNewJobButton>

        </WJobContainer>
    )
}

const WJobContainer = w.div`
    flex flex-col items-left bg-white border-[1px] border-primaryBlue rounded-[10px] pl-[11px]
`

const WNewJobButton = w.button`
    family-roboto text-[3A3A3A] text-[16px] w-[661px] font-[400] mt-[18px] mb-[12px] h-[36px]  bg-transparent cursor-pointer border-[1px] border-primaryBlue rounded-[10px]
`