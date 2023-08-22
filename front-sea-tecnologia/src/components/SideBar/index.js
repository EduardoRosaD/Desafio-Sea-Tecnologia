import SideButton from "./sideButton";
import WhiteBlock from "./witheBlock";
import { w } from "windstitch"

export default function SideBar(){
    return(
        <WSideBar>
            <WhiteBlock/>
            <SideButton icon="icons/itemLogo.svg"/>
            <SideButton icon="icons/newEmployeeLogo.svg"/>
            <SideButton icon="icons/infoLogo.svg"/>
            <SideButton icon="icons/notificationLogo.svg"/>
            <SideButton icon="icons/updateLogo.svg"/>
            <SideButton icon="icons/profileLogo.svg"/>
        </WSideBar>
    )
}

const WSideBar = w.div`
   bg-primaryBlue h-screen w-20 flex flex-col justify-center items-center gap-24 border-r-custom border rounded-r-custom

`