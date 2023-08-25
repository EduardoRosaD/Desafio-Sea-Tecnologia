import { w } from "windstitch";
import { EmployeeRegContext } from "../../../context/employeeRegContext";
import { useContext, useState } from "react";

export default function MedicalCert() {
    const { employeeForm, setEmployeeForm } = useContext(EmployeeRegContext)
    const [ medicalCert, setMedicalCert ] = useState("")

    const handleMedicalCert = (e) => {
        e.preventDefault()
        setMedicalCert(e.target.value)
        setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value })
    }

    return (
        <WMedicalCertContainer>
            <WTitle>Adicione Atestado de Saúde Ocupacional (opcional):</WTitle>
            <WMedicalCert>
                <WText>{medicalCert.split(/[\\/]/)[2]}</WText>
            </WMedicalCert>
            <WSelectFileContainer>
                <label htmlFor="file" >Selecione o Arquivo</label>
                <WSelectFileInput type="file" onChange={(e)=> handleMedicalCert(e)} id="file" name="file" />
            </WSelectFileContainer>

        </WMedicalCertContainer>

    )
}

const WMedicalCertContainer = w.div`
w-[702px] border-[1px] 
border-primaryBlue rounded-[10px] pl-[13px] mt-[26px]  pt-[13px] pr-[8px] pb-[14px] mb-[12px]
`

const WTitle = w.h1`
    font-[500] family-roboto text-[#3A3A3A] text-[16px] text-left
`

const WMedicalCert = w.div`
    h-[36px]  flex items-center  gap-[11px] mt-[18px] relative justify-start border-[1px] justify-start
    border-primaryBlue rounded-[10px] cursor-pointer pl-[12px]
`

const WText = w.p`
    font-[500] family-roboto text-[#3A3A3A] text-[16px]
`

const WSelectFileContainer = w.div`
    flex items-left justify-start gap-[11px] mt-[18px] h-[36px] relative justify-center border-[1px] 
    border-primaryBlue rounded-[10px] cursor-pointer pt-[6px] 
`

const WSelectFileInput = w.input`
     h-[20px] rounded-[2px] border-[1px] border-[#3A3A3A]  w-[679px] absolute  cursor-pointer opacity-0
`
