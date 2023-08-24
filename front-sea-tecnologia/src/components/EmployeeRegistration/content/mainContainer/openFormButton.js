import { w } from "windstitch";
import { EmployeeRegContext } from "../../context/employeeRegContext";
import { useContext } from "react";

export default function OpenFormButton(){
    const { setAddEmployee } = useContext(EmployeeRegContext)
    return (
        <WOpenFormButton onClick={() => setAddEmployee(true)}>
        +Adicionar Funcionário 
        </WOpenFormButton>
    )
}

const WOpenFormButton = w.button`
    family-ubuntu text-primaryBlue text-[16px] w-[729px] h-[60px] rounded-[10px] font-400 border-primaryBlue border-[1px]
`