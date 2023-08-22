import SideButton from "./sideButton";
import WhiteBlock from "./witheBlock";
import { w } from "windstitch"

export default function SideBar(){
    return(
        <WSideBar>
            <WhiteBlock/>
            <SideButton icon="icons/itemIcon.svg"/>
            <SideButton icon="icons/newEmployeeIcon.svg"/>
            <SideButton icon="icons/infoIcon.svg"/>
            <SideButton icon="icons/notificationIcon.svg"/>
            <SideButton icon="icons/updateIcon.svg"/>
            <SideButton icon="icons/profileIcon.svg"/>
        </WSideBar>
    )
}

const WSideBar = w.div`
   bg-primaryBlue h-screen w-20 flex flex-col justify-center items-center gap-24 rounded-r-custom 

`