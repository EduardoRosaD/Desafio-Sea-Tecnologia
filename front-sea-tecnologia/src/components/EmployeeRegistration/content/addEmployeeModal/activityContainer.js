import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

export default function ActivyContainer(){
    const { setEmployeeForm, employeeForm } = useContext(EmployeeRegContext)
    const handleActivity = (e) => {
        e.preventDefault()
        setEmployeeForm({...employeeForm,  active: !employeeForm.activity})
    }
    return (
        <WActivyContainer>
            <WText>O trabalhador está ativo ou inativo? </WText>
            {employeeForm.activity?
                <>
                    <WButton onClick={(e) => handleActivity(e)}>Ativo <img src="images/blueBall.svg"></img> </WButton>
                   
                </>
                :
                <WButton onClick={(e) => handleActivity(e)}><img src="images/blueBall.svg"></img>  Inativo </WButton>
            }
        </WActivyContainer>
    )
}


const WActivyContainer = w.div`
    flex  items-center justify-between w-[702px] h-[67px] bg-white pl-[11px] pr-[12px] pt-[9px] 
    pb-[15px] mt-[70px] mb-[27px] rounded-[10px] border-primaryBlue border-[1px]
`

const WText = w.p`
    font-[500] family-roboto text-[#3A3A3A] text-[16px]
`

const WButton = w.button`
    family-ubuntu text-[3A3A3A] text-[12px] font-[400] h-[21px] w-[75px] flex justify-center items-center gap-[9px] pl-[13px] border-primaryBlue border-[1px] pr-[8px] rounded-[10px]
`   
