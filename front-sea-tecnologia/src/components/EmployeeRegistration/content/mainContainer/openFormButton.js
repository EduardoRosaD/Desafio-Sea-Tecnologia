import { w } from "windstitch";

export default function OpenFormButton(){
    return (
        <WOpenFormButton>
        +Adicionar Funcionário 
        </WOpenFormButton>
    )
}

const WOpenFormButton = w.button`
    family-ubuntu text-primaryBlue text-[16px] w-[729px] h-[60px] rounded-[10px] font-400 border-primaryBlue border-[1px]
`