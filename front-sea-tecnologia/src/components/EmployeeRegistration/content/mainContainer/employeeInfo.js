import { w } from "windstitch";

export default function EmployeeInfo({employee}){
    return (
        <WEmployeeInfo>
            <WName>{employee.name}</WName>
            <WSpan>{employee.cpf}</WSpan>
            <WSpan>{employee.role}</WSpan>
            <WSpan>{employee.job}</WSpan>
            <WButton>
              <img src="images/treeDots.svg" alt="logo" />
            </WButton>
        </WEmployeeInfo>
    )
}

const WEmployeeInfo = w.div`
    family-ubuntu text-primaryBlack h-[84px] w-[715px] rounded-[10px] font-400 bg-[#EDF1F5] border-[1px] pb-[12px] pt-[12px] pl-[12px] relative
`

const WName = w.p`
    family-ubuntu text-primaryBlack text-[24px] font-400 z-10
`

const WSpan = w.span`
    family-ubuntu text-primaryBlack text-[14px] font-400  bg-primaryBlue rounded-[34px] pt-[4px] pb-[4px] pl-[16px]  pr-[16px] text-white mr-[12px]
`

const WButton = w.button`
    family-ubuntu text-primaryBlack text-[14px] font-400 absolute right-[0px] top-[0px] rounded-r-[10px] bg-primaryBlue h-[84px] w-[40px] flex justify-center items-center
`
