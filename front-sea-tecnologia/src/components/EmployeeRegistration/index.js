import { w } from "windstitch";
import { EmployeeRegContext } from "./context/employeeRegContext";
import { useState } from "react";

import ProgressBar from "./progressBar";
import MainContent from "./content";

const  employeesList = [ {
    name: 'João',
    ativo: false,
    cpf: '123.456.789-10',
    cargo: 'Desenvolvedor',
    atividade: 'Desenvolvimento',
},
{
    name: 'Maria',
    ativo: true,
    cpf: '123.456.789-10',
    cargo: 'Desenvolvedor',
    atividade: 'Desenvolvimento',
},
{
    name: 'José',
    ativo: true,
    cpf: '123.456.789-10',
    cargo: 'Desenvolvedor',
    atividade: 'Desenvolvimento',
}
]

export default function EmployeeRegistration(props) {
    const [concluedText, setConcluedText] = useState('CONCLUIDO')
    const [employeesListState, setEmployeesListState] = useState(employeesList)


    return (
        <EmployeeRegContext.Provider value={{ 
            concluedText, 
            setConcluedText,
            employeesListState, 
            setEmployeesListState }}>

            <WEmployeeRegistration>
                <ProgressBar />
                <MainContent />
                <WButton>Próximo passo </WButton>
            </WEmployeeRegistration>

        </EmployeeRegContext.Provider>
    )
}

const WEmployeeRegistration = w.div`
    flex flex-col items-center justify-center gap-[58px]
`

const WButton = w.button`
    family-roboto text-white text-[14px] font-[700] mr-[12px] rounded-[10px] bg-primaryBlue h-[32px] w-[194px] flex justify-center items-center  pr-[2px] absolute right-[288px] top-[730px]
`