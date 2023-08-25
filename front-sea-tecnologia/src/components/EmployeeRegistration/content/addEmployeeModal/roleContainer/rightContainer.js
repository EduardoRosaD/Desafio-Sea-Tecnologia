import{ w } from 'windstitch'
import { EmployeeRegContext } from "../../../context/employeeRegContext"
import { useContext } from "react";

import GenderInputContainer from './genderInputContainer'
import InputContainer from '../inputContainer'
import SelectRoleInput from './selectRoles';

export default function RightContainer(){
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    return (
        <WRightContainer>
            <GenderInputContainer/>
            <InputContainer 
                label = 'Data de nascimento'
                onChange = {handleEmployeeForm}
                value = {employeeForm.birthDate}
                type = 'text'
                name = 'birthDate'
            />
            <SelectRoleInput/>
        </WRightContainer>
    )
}

const WRightContainer = w.div`
    flex flex-col align-left justify-center  items-center   bg-white h-[235px] pt-[18px]
`

const WTitle = w.h1`
    `