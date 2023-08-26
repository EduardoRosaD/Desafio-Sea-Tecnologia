import { w } from "windstitch";
import { EmployeeRegContext } from "./context/employeeRegContext";
import { useState } from "react";

import ProgressBar from "./progressBar";
import MainContent from "./content";

const employeesList = [{
    name: 'João',
    active: false,
    cpf: '123.456.789-10',
    role: 'Desenvolvedor',
    job: 'Desenvolvimento',
},
{
    name: 'Maria',
    active: true,
    cpf: '123.456.789-10',
    role: 'Desenvolvedor',
    job: 'Desenvolvimento',
},
{
    name: 'José',
    active: true,
    cpf: '123.456.789-10',
    role: 'Desenvolvedor',
    job: 'Desenvolvimento',
}
]

export default function EmployeeRegistration(props) {
    const [concluedText, setConcluedText] = useState('CONCLUIDO')
    const [addEmployee, setAddEmployee] = useState(false)
    const [totalEPIs, setTotalEPIs] = useState([])
    const [employeesListState, setEmployeesListState] = useState(employeesList)
    const [employeeForm, setEmployeeForm] = useState({
        name: '',
        cpf: '',
        role: '',
        job: [],
        EPIs: [{
            name: '',
            CA: '',  
        }],
        active: false,
        rg: '',
        birthDate: '',
        gender: '',
        medicalCert: '',
    })

    const handleEmployeeForm = (e) => {
        e.preventDefault()
        console.log(employeeForm)
        setEmployeeForm({ ...employeeForm, [e.target.name]: e.target.value })
    }


    return (
        <EmployeeRegContext.Provider value={{
            concluedText,
            setConcluedText,
            addEmployee, 
            setAddEmployee,
            employeesListState,
            setEmployeesListState,
            employeeForm, 
            setEmployeeForm,
            handleEmployeeForm,
            totalEPIs, 
            setTotalEPIs
        }}>

            <WEmployeeRegistration>
                <ProgressBar />
                <MainContent />
            </WEmployeeRegistration>

        </EmployeeRegContext.Provider>
    )
}

const WEmployeeRegistration = w.div`
    flex flex-col items-center justify-center gap-[58px] bg-[#F2F2F2]
`

