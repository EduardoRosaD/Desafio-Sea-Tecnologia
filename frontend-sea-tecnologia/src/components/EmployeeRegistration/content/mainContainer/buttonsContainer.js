import  { w }  from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

import FilterButton from "./filterButton";

export default function FilterButtonsContainer(){
    const { employeesListState } = useContext(EmployeeRegContext)
    return (
        <WFilterButtonsContainer>
            <FilterButton text="Ver apenas ativos" filterType="active" />
            <FilterButton text="Limpar Filtros"  filterType="unactive" />
            <WActiveCount>{employeesListState.filter((employee) => employee.active).length}/{employeesListState.length} ativos</WActiveCount>
        </WFilterButtonsContainer>
    )
}



const WFilterButtonsContainer = w.div`
    flex aling-start justify-start  h-[31px] mt-[20px] gap-[30px]  w-[729px]
`

const WActiveCount = w.span`
    family-ubuntu text-[#4F4F4F] flex p-6 items-center justify-center absolute right-[300px] top-[405px]
`