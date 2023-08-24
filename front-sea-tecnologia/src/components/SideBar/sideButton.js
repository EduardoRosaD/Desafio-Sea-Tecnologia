import { w }  from "windstitch"



export default function SideButton(props) {
    const selected = props.icon == "icons/newEmployeeIcon.svg"
    return (
        <WSideButton >
            {selected ? <WSideBorder/> : null}
            <img src={props.icon} alt="logo" />
        </WSideButton>
    )
}

const WSideButton = w.button`
    h-[32px] w-[32px]
`

const WSideBorder = w.div`
    h-[32px] w-[4px] bg-white absolute left-0 
`

