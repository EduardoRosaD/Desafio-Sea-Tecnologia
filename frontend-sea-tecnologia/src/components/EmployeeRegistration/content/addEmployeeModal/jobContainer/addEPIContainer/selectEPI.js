import { w } from "windstitch";
import { EmployeeRegContext } from "../../../../context/employeeRegContext"
import { useContext, useState } from "react";

export default function SelectEPIINPUT({ pos }) {
    const { employeeForm, setEmployeeForm, totalEPIs, setTotalEPIs } = useContext(EmployeeRegContext)
    const [EPIsList, setEPIsList] = useState(['Calçado de Segurança', 'Capacete de Segurança',
        'Cinto de Segurança', 'Luvas de Segurança', 'Máscara de Segurança', 'Óculos de Segurança',
        'Protetor Auricular', 'Protetor Facial', 'Protetor Respiratório', 'Vestimenta de Segurança', 'Outros'])
   

    const handleEPI = (e) => {
        let localEPI = [...employeeForm.EPIs]
        e.preventDefault()
        console.log(employeeForm)
        localEPI[pos].name = e.target.value
        let filteredEPIs = localEPI.filter((EPI) => EPI.CA !== ''|| EPI.name !== '')
        setEmployeeForm({ ...employeeForm, EPIs: filteredEPIs })
    }

    return (
        <WSelectEPIInput>
            <WLabel>Selecione o EPI:</WLabel>
            <WSelectInput onChange={handleEPI}>
                <option value="" disabled selected></option>
                {EPIsList.map((EPI, index) => {
                    return <option key={index} value={EPI}>{EPI}</option>
                })}
            </WSelectInput>
        </WSelectEPIInput>
    )
}

const WSelectEPIInput = w.div`
    flex flex-col items-left flex-1 mb-[12px]  gap-[7px] 
`

const WSelectInput = w.select`
h-[36px] bg-white  border-[1px] border-primaryBlue rounded-[10px] pl-[11px]  mb-[12px] w-[249px]
`

const WLabel = w.label`
    family-roboto text-[3A3A3A] text-[16px] font-[400]
`
