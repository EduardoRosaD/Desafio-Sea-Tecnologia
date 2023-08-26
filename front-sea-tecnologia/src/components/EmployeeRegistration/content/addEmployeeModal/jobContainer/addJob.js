import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext";
import { useContext, useState } from "react";

import AddEPIContainer from "./addEPIContainer/addEPIContainer";

export default function AddJobContainer({ index }) {
    const { employeeForm, handleEmployeeForm, setEmployeeForm } = useContext(EmployeeRegContext)
    const jobsList = ["Ativ. 1", "Ativ. 2", "Ativ. 3", "Ativ. 4", "Ativ. 5", "Ativ. 6", "Ativ. 7", "Ativ. 8",]

    const handleJob = (e) => {
        e.preventDefault()
        console.log(employeeForm)
        let localJob = [...employeeForm.job]
        localJob[index] = e.target.value
        setEmployeeForm({ ...employeeForm, job: localJob })

    }

    return (
        <WJobContainer>
            <WLabel>Selecione a atividade:</WLabel>
            <WSelectContainer>
                <WSelectInput onChange={(e) => handleJob(e)} name="job">
                    <option value="" disabled selected>Selecione a atividade</option>
                    {jobsList.map((job, index) => (
                        <option key={index} value={job}>{job}</option>
                    ))}
                </WSelectInput>
            </WSelectContainer>
            <AddEPIContainer index={index} />
          
        </WJobContainer>
    )
}

const WJobContainer = w.div`
    flex flex-col items-left
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[400] mt-[18px]
`

const WSelectContainer = w.div`
    flex items-left justify-start gap-[8px] mt-[18px] 
`

const WSelectInput = w.select`
w-[661px] h-[40px] bg-white  border-[1px] border-primaryBlue rounded-[10px] pl-[11px]  mb-[12px]
`

