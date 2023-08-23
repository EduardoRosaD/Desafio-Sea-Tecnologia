import { w } from "windstitch"
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
    h-40 flex justify-center items-center m-10 bg-white rounded-custom  w-[1248px] absolute shadow-custom1
`
const WProgressBar = w.div`
    flex justify-center items-start 
`
