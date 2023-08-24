import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

import AddEPI from "./addEPI";

export default function addEPIContainer(){
    const { employeeForm, handleEmployeeForm } = useContext(EmployeeRegContext)
    const [ EPIList, setEPIList ] = useState([ 0])

    const handleAddEPI = (e) => {
        e.preventDefault()
        setEPIList([...EPIList, EPIList.length])
    }

    return (
        <WAddEPIContainer>
            {EPIList.map((EPI, index) => (
                <AddEPI key={index} index={index} handleAddEPI={handleAddEPI}/>
            ))}
          
        </WAddEPIContainer>
    )
}

const WAddEPIContainer = w.div`
    flex flex-col items-left 
`