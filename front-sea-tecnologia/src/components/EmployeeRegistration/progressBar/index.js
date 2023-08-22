import { w } from "windstitch"
import ProgressStage from "./progressStage"
import StageContainer from "./stageContainer"

export default function ProgressBar(props) {
    return (
        <WProgressBar>

        <WImageContainer>
        <img src="images/progressBar.svg" alt="logo"
         />
         </WImageContainer>

            <StageContainer>
            </StageContainer>


         </WProgressBar>
    )
}

const WImageContainer = w.div`
   p-10 h-40 flex justify-center items-center m-10 bg-white rounded-custom absolute
`
const WProgressBar = w.div`
    flex justify-center items-start
`
