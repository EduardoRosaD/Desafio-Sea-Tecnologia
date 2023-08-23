import { w } from "windstitch";

export default function FilterButton({text,func}){
    return (
        <WFilterButton onClick={func}>
            {text}
        </WFilterButton>
    )
}

const WFilterButton = w.button`
    family-ubuntu text-primaryBlue  text-[14px] h-[31px] w-[192px] rounded-[10px] font-400 border-primaryBlue border-[1px] flex  items-center justify-center  
     
    `  