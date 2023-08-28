import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

import OpenFormButton from "./openFormButton";
import FilterButtonsContainer from "./buttonsContainer";
import EmployeeInfoList from "./employeeInfoList";
import Footer from "./footer";


export default function MainContainer(){
    const { addEmployee } = useContext(EmployeeRegContext)
    return (
        <WMainContainer>
            <WTitle>Funcionários(s)</WTitle>
            <OpenFormButton />
            <FilterButtonsContainer></FilterButtonsContainer>
            <EmployeeInfoList></EmployeeInfoList>
            <Footer></Footer>
            {
                !addEmployee && <WButton>Próximo passo</WButton>
            }
        </WMainContainer>
    )
}

const WMainContainer = w.div`
    flex flex-col items-center  w-[759px] bg-white h-[484px] rounded-custom shadow-custom1 
`

const WTitle = w.h1`
    family-ubuntu text-white  text-[28px] bg-primaryBlue w-[100%] rounded-t-custom p-3 mb-[35px]
`
const WButton = w.button`
    family-roboto text-white text-[14px] font-[700] mr-[12px] rounded-[10px] bg-primaryBlue h-[32px] w-[194px] flex justify-center items-center  pr-[2px] absolute right-[288px] top-[730px]
`