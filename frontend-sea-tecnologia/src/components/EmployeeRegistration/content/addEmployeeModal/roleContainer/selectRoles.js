import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext"
import { useContext } from "react";

export default function SelectRole(){
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    const rolesList = [ 'cargo0', 'cargo1', 'cargo2', 'cargo3', 'cargo4', 'cargo5']
    return(
        <WSelectRole>
            <WLabel>Cargo</WLabel>
            <WSelect onChange={handleEmployeeForm} value={employeeForm.role} name="role">
                <option value="" disabled selected></option>
                {rolesList.map((role, index) => {
                    return <option key={index} value={role}>{role}</option>
                })}
            </WSelect>
        </WSelectRole>
    )
}

const WSelectRole = w.div`
    flex flex-col items-left flex-1 mb-[12px] w-[100%] gap-[7px]
`

const WSelect = w.select`
    family-roboto text-[3A3A3A] text-[16px] font-[400] border-[1px] border-primaryBlue rounded-[10px] pl-[8px] pr-[8px] h-[36px] bg-white
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[500]
`