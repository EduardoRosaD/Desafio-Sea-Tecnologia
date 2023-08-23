import { w } from "windstitch";

export default function EmployeeInfo() {
    return (
        <WEmployeeInfo>
            <WText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate  tempus.
            </WText>
        </WEmployeeInfo>
    )
}

const WEmployeeInfo = w.div`
    flex flex-col rounded-custom w-[447px] h-[484px] bg-white p-5 shadow-custom1
`

const WText = w.p`
    text-primaryBlack text-[16px] text-left 
`