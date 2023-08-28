import { w } from "windstitch"
import StageContainer from "./stageContainer"
import Image from "next/image"

export default function ProgressBar(props) {
    return (
        <WProgressBar>

        <WImageContainer>
        <Image src="images/progressBar.svg" alt="logo" width={1248} height={40}
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
