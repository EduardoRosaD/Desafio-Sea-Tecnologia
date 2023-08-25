import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

import AddEPI from "./addEPI";

export default function addEPIContainer({index}){
    const { employeeForm, setEmployeeForm } = useContext(EmployeeRegContext)
    const [ EPIList, setEPIList ] = useState([ 0])

    const handleAddEPI = (e) => {
        e.preventDefault()
        console.log(EPIList)
        setEPIList([...EPIList, 1])
        let  localEPIs = [...employeeForm.EPIs]
        localEPIs.push({name: '', CA: ''})
        localEPIs[index].CA = e.target.value
        setEmployeeForm({ ...employeeForm, EPIs: localEPIs })
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