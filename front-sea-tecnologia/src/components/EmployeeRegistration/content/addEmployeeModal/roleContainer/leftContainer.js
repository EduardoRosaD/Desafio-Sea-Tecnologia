import { w } from 'windstitch'
import { EmployeeRegContext } from "../../../context/employeeRegContext"
import { useContext } from "react";

import InputContainer from "../inputContainer";

export default function LeftContainer() {
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    return (
        <WLeftContainer>
            <InputContainer props={{
                label: 'Nome',
                onChange: handleEmployeeForm,
                value: employeeForm.name,
                type: 'text',  
                name: 'role'
            }} />
            <InputContainer props={{
                label: 'CPF',
                onChange: handleEmployeeForm,
                value: employeeForm.cpf,
                type: 'text',
                name: 'cpf'
            }} />
            <InputContainer props={{
                label: 'RG',
                onChange: handleEmployeeForm,
                value: employeeForm.rg,
                type: 'text',
                name: 'rg'
            }} />
        </WLeftContainer>
    )
}

const WLeftContainer = w.div`
    flex flex-col items-center w-[100%] bg-white h-[235px] pl-[12px] pr-[12px] pt-[8px] pb-[12px]
`

