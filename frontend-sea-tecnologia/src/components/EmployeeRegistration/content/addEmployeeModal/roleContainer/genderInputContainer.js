import { w }  from 'windstitch'
import { EmployeeRegContext } from "../../../context/employeeRegContext"
import { useContext } from "react";
import { useState } from "react";

import CheckBox from './checkBox';

export default function GenderInputContainer({ props }) {
    const { employeeForm, setEmployeeForm } = useContext(EmployeeRegContext)
    const [checked, setChecked] = useState('')

    const handleGender = (e) => {
        e.preventDefault()
        setChecked('')
        setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value })
    }

    return(
        <WGenderInputContainer>
            <WLabel>Sexo</WLabel>
            <WCheckContainer>
            <CheckBox name={"Masculino"} checked={checked} value ={"Masculino"} setChecked={setChecked}> </CheckBox>
            <CheckBox name={"Feminino"} checked={checked} value={"Feminino"}  setChecked={setChecked}> </CheckBox>
            </WCheckContainer>
        </WGenderInputContainer>
    )
}

const WGenderInputContainer = w.div`
    flex  items-left flex-col  mb-[12px] w-[100%] gap-[19px]
`
const WCheckContainer = w.div`
    flex gap-[25px]  items-baseline
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[500]
`
