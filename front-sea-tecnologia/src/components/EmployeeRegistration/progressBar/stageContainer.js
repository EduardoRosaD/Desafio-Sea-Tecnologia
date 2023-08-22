import { w } from "windstitch"
import ProgressStage from "./progressStage"

export default function StageContainer(props) {
    return(
        <WStageContainer>
                <ProgressStage />
                <ProgressStage />
                <ProgressStage/>
                <ProgressStage/>
                <ProgressStage/>
                <ProgressStage />
                <ProgressStage />
                <ProgressStage/>
                <ProgressStage/>
        </WStageContainer>
    )

}

const WStageContainer = w.div`
   flex   gap-16
`