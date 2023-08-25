import { w } from "windstitch";

export default function InputContainer(props) {
    return (
        <WInputContainer>
            <WLabel>{props.label}</WLabel>
            <WInput onChange={(e)=>props.onChange(e)} value={props.value} name={props.name}
            type={props.type} placeholder={props.placeholder} />
        </WInputContainer>
    )
}

const WInputContainer = w.div`
    flex  items-left flex-col gap-[7px] mb-[12px] 
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[500]  
`

const WInput = w.input`
    family-ubuntu text-[3A3A3A] text-[14px] font-[400]  rounded-[10px] h-[36px] w-[335px] flex justify-center items-center gap-[9px] pl-[13px] border-primaryBlue border-[1px] pr-[8px]
`
