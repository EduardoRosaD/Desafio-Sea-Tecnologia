import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

export default function Footer() {
    const { setConcluedText, concluedText } = useContext(EmployeeRegContext)

    return (
        <WFooter>
            <WSpan>A estapa está concluida?</WSpan>
            {concluedText === 'CONCLUIDO' ?
                <>
                    <WButton onClick={() => setConcluedText('')}>Sim <img src="images/blueBall.svg"></img> </WButton>
                   
                </>
                :
                <WButton onClick={() => setConcluedText('CONCLUIDO')}><img src="images/blueBall.svg"></img>  Não </WButton>
            }
        </WFooter>
    )
}

const WFooter = w.div`
    flex justify-end items-center w-[715px]  bg-white rounded-b-custom gap-[12px] ml-[45px]
`

const WSpan = w.span`
    family-ubuntu text-[3A3A3A] text-[14px] font-[400]  ml-[12px]
`

const WButton = w.button`
    family-ubuntu text-[3A3A3A] text-[14px] font-[300] mr-[12px] rounded-[10px] bg-[#DBDBDB] h-[20px] w-[52px] flex justify-end items-center gap-[5px] pr-[2px] 
`  
