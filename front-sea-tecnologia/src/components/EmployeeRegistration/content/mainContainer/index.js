import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

import OpenFormButton from "./openFormButton";
import FilterButtonsContainer from "./buttonsContainer";
import EmployeeInfoList from "./employeeInfoList";
import Footer from "./footer";


export default function MainContainer(){
    const { employeesListState } = useContext(EmployeeRegContext)
    return (
        <WMainContainer>
            <WTitle>Funcionários(s)</WTitle>
            <OpenFormButton />
            <FilterButtonsContainer></FilterButtonsContainer>
            <EmployeeInfoList></EmployeeInfoList>
            <Footer></Footer>
        </WMainContainer>
    )
}

const WMainContainer = w.div`
    flex flex-col items-center  w-[759px] bg-white h-[484px] rounded-t-custom 
`

const WTitle = w.h1`
    family-ubuntu text-white  text-[28px] bg-primaryBlue w-[100%] rounded-t-custom p-3 mb-[35px]
`
