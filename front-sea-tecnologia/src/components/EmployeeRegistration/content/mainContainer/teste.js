export default function SideBar(){
    const iconsList = ["icons/itemIcon.svg", "icons/newEmployeeIcon.svg", "icons/infoIcon.svg", "icons/notificationIcon.svg", "icons/updateIcon.svg", "icons/profileIcon.svg"]
    return(
        <WSideBar>
            <WhiteBlock/>
            {iconsList.map((icon, index) => {
                return <SideButton key={index} icon={icon}/>
            })
            }
        </WSideBar>
    )
}

const WSideBar = w.div`
   bg-primaryBlue h-[768px] w-[57px] flex flex-col justify-center items-center gap-[24px] rounded-r-custom 

`