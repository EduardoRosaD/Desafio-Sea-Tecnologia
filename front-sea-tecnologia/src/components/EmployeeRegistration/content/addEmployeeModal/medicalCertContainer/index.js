import { w } from "windstitch";

export default function MedicalCertContainer(){
    return (
        <WMedicalCertContainer>
            <WTitle>MedicalCertContainer</WTitle>
        </WMedicalCertContainer>
    )
}


const WMedicalCertContainer = w.div`
    flex flex-col items-center  w-[725px] bg-white h-[135px] rounded-t-custom
`

const WTitle = w.h1`
    
`