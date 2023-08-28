import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext, useState } from "react";

export default function FilterButton({ text, func, filterType }) {
    const { employeesListState, setEmployeesListState, employeesList } = useContext(EmployeeRegContext)
    const filterList = (e) => {
        e.preventDefault()
        let localList = [...employeesListState]

        if (filterType === 'active') localList = localList.filter(employee => employee.active === true)
        if (filterType === 'unactive') localList = employeesList

       
        
        setEmployeesListState(localList)
    }
        return (
            <WFilterButton onClick={filterList}>
                {text}
            </WFilterButton>
        )
    }

    const WFilterButton = w.button`
    family-ubuntu text-primaryBlue  text-[14px] h-[31px] w-[192px] rounded-[10px] font-400 border-primaryBlue border-[1px] flex  items-center justify-center   
    `  