import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

import SelectEPIINPUT from "./selectEPI";

export default function AddEPI({handleAddEPI}) {
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
   
    return (
        <WAddEPI>
           <SelectEPIINPUT/>
           <WInputContainer>
            <WLabel>Informe o número do CA:</WLabel>
            <WInput onChange={handleEmployeeForm}/>
        </WInputContainer>
            <WButton
            type="button"
            onClick={(e) => handleAddEPI(e)}
            >Adicionar EPI</WButton>
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
