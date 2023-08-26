import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

import ActivyContainer from "./activityContainer";
import RoleContainer from "./roleContainer";
import MedicalCertContainer from "./medicalCertContainer";
import JobContainer from "./jobContainer";
import { employeeRegister, getEmployees } from "../../actions";

export default function AddEmployeeModal() {
    const { setAddEmployee, employeeForm } = useContext(EmployeeRegContext)

    return (
        <WAddEmployeeModal>

            <WHeaderContainer>
            <WButton onClick={() => setAddEmployee(false)}>
                <img src="/icons/arrowLeft.svg" alt="close" />
            </WButton>
           <WHeader>Adicionar Funcionário</WHeader>
            </WHeaderContainer>
            <WForm onSubmit={(e) => employeeRegister(e,employeeForm)}>
                <ActivyContainer />
                <RoleContainer />
                <JobContainer />
                <MedicalCertContainer />
                <WSubmitButton type="submit">Salvar</WSubmitButton>
            </WForm>

        </WAddEmployeeModal>
    )
}

const WAddEmployeeModal = w.div`
flex shadow-custom1  bg-white flex-col relative rounded-custom shadow-custom1  h-[100%] mb-[64px]  pl-[17px] pr-[17px]
`

const WHeaderContainer = w.div`
flex items-center justify-left w-[100%] h-[55px] bg-primaryBlue rounded-t-custom p-3 mb-[35px] gap-[14px] absolute top-[0px] right-[0px] 
`

const WButton = w.button`
flex items-center justify-start h-[32px]
`

const WHeader = w.h1`
family-ubuntu text-white  text-[28px] 
`

const WForm = w.form`
flex flex-col items-center  bg-white  w-[100%] rounded-custom shadow-custom1
`

const WSubmitButton = w.button`
flex items-center justify-center w-[100%] h-[36px]  rounded-[10px] 
  text-[16px] rounded-[10px] border-primaryBlue border-[1px] mb-[26px] 
`
