import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

import SelectEPIINPUT from "./selectEPI";

export default function AddEPI({handleAddEPI,pos}) {
    const { employeeForm, setEmployeeForm , totalEPIs, setTotalEPIs } = useContext(EmployeeRegContext)

    const handleEmployeeForm = (e) => {
        e.preventDefault()
       
        let  localEPIs = [...employeeForm.EPIs]
        localEPIs[pos].CA = e.target.value
        console.log(pos,localEPIs)
        let filteredEPIs = localEPIs.filter((EPI) => EPI.CA !== ''|| EPI.name !== '')
        setEmployeeForm({ ...employeeForm, EPIs: filteredEPIs })
    }

    
   
    return (
        <WAddEPI>
           <SelectEPIINPUT pos={totalEPIs.length}/>
           <WInputContainer>
            <WLabel>Informe o número do CA:</WLabel>
            <WInput onChange={handleEmployeeForm}/>
        </WInputContainer>
          <WButton onClick={handleAddEPI}>Adicionar EPI</WButton>
        </WAddEPI>
    )
}

const WAddEPI = w.div`
    flex items-left w-[661px] justify-center gap-[17px]  pr-[32px]
    `
const WInputContainer = w.div`
    flex  items-left flex-col gap-[7px] mb-[12px] 
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[400]  
`

const WInput = w.input`
    family-roboto text-[3A3A3A] text-[14px] font-[400]  rounded-[10px] h-[36px] w-[249px] flex justify-center items-center gap-[9px] pl-[13px] border-primaryBlue border-[1px] 
`

const WButton = w.button`
    family-roboto text-[3A3A3A] text-[16px] font-[400]  
`
