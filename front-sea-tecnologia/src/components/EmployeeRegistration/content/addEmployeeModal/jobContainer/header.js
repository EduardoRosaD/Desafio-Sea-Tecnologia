import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext";
import { useContext, useState } from "react";

export default function Header() {
    const {  needEPI, setNeedEPI } = useContext(EmployeeRegContext)
    return (
        <WHeaderContainer>
            <WTitle>Quais EPIs o trabalhador usa na atividade?</WTitle>
            <WCheckBoxContainer>
                <WCheckBoxInput type="checkbox" onChange={() => setNeedEPI(!needEPI)} />
                <WCheckBoxLabel>O trabalhador não usa EPI</WCheckBoxLabel>
            </WCheckBoxContainer>

        </WHeaderContainer>

    )
}

const WHeaderContainer = w.div`
    flex flex-col items-left   mb-[11px]
`

const WTitle = w.h1`
    font-[500] family-roboto text-[#3A3A3A] text-[16px]
`

const WCheckBoxContainer = w.div`
    flex items-left justify-start gap-[11px] mt-[18px]
`

const WCheckBoxInput = w.input`
    w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#3A3A3A]
`

const WCheckBoxLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[400] 
`