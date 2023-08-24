import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext"
import { useContext } from "react";
import { useState } from "react";



export default function CheckBox(props){
    const { employeeForm, handleEmployeeForm, setEmployeeForm } = useContext(EmployeeRegContext)
    const handleGender = (e) => {
        e.preventDefault()
        setEmployeeForm({...employeeForm,gender: props.name})
        props.setChecked(props.name)
        console.log(employeeForm)
}
    return(
        <WCheckBox>
            {props.checked === props.name ?
            <img src="/icons/checkedBox.svg" alt="checked" onClick={(e) => handleGender(e)}/>
            :
            <img src="/icons/uncheckedBox.svg" alt="unchecked" onClick={(e) => handleGender(e)}/>   
        }
            <Wlabel>{props.name}</Wlabel>
        </WCheckBox>
    )
}

const WCheckBox = w.div`
    flex gap-[11px] items-center 
`

const Wlabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[400]
`

