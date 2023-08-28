import { w } from "windstitch";

import LeftContainer from "./leftContainer";
import RightContainer from "./rightContainer";

export default function RoleContainer(){
    return (
        <WRoleContainer>
            <LeftContainer/>
            <RightContainer/>
        </WRoleContainer>
    )
}


const WRoleContainer = w.div`
    flex shadow-custom2  items-center  w-[702px] bg-white h-[255px] border-primaryBlue border-[1px] pr-[8px] rounded-[10px]
` 

const WTitle = w.h1`
  
`