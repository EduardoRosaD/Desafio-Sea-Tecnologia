import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

import AddEPI from "./addEPI";

export default function addEPIContainer({index}){
    const { employeeForm, setEmployeeForm, totalEPIs, setTotalEPIs} = useContext(EmployeeRegContext)
    const [ EPIList, setEPIList ] = useState([0])
    let  localEPIs = [...employeeForm.EPIs]
    const handleAddEPI = (e) => {
        e.preventDefault()
        setTotalEPIs([...totalEPIs, 1])
       
        localEPIs.push({name: '', CA: ''})
        setEmployeeForm({ ...employeeForm, EPIs: localEPIs })
        setEPIList([...EPIList, 1])
              
    }

    return (
        <WAddEPIContainer>
            {EPIList.map((EPI, index) => (
                <AddEPI key={index} pos={totalEPIs.length} handleAddEPI={handleAddEPI}/>
            ))}
        
        </WAddEPIContainer>
    )
}

const WAddEPIContainer = w.div`
    flex flex-col items-left 
`

const WButton = w.button`
    family-roboto text-[3A3A3A] text-[16px] font-[400] absolute 
`