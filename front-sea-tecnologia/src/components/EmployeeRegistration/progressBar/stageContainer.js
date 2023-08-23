import { w } from "windstitch"
import ProgressStage from "./progressStage"
import { EmployeeRegContext } from "../context/employeeRegContext.js"
import { useContext } from "react"

export default function StageContainer(props) {
    const { concluedText } = useContext(EmployeeRegContext)
    const itensList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <WStageContainer>
            {itensList.map((item) => (
                <WProgressStageContainer>
                    <ProgressStage key={item} />
                    {item === 1 && <WText >{concluedText}</WText>}
                </WProgressStageContainer>
            ))}
        </WStageContainer>
    )

}

const WStageContainer = w.div`
   flex gap-[73px] items-center w-[1248px] h-[159px] justify-center m-2
`

const WProgressStageContainer = w.div`
    flex flex-col items-center justify-center
`
const WText = w.span`
    family-ubuntu text-primaryBlue font-normal z-10 absolute top-[170px]
`