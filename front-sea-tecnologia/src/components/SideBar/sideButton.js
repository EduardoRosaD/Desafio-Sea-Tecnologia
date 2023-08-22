

export default function SideButton(props) {
    const selected = props.icon == "icons/newEmployeeLogo.svg"
    return (
        <button class = {selected ? "border-l-custom border-white pl-5  mr-5" : ""}>
            <img src={props.icon} alt="logo" />
        </button>
    )
}


