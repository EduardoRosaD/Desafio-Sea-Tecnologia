import { w } from "windstitch";

import EmployeeInfo from "./employeeInfoContainer";
import MainContainer from "./mainContainer";

export default function MainContent(){
    return (
        <WMain>
            <EmployeeInfo />
            <MainContainer />
        </WMain>
    )
}

const WMain = w.div`
    flex  items-start gap-[34px]  shadow-custom1
`
