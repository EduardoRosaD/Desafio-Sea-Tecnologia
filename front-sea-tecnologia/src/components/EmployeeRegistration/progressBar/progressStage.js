import { w } from "windstitch"

export default function ProgressStage(props) {
    return (
        <WProgressStage>

        <ImageContainer>
            <img src="icons/progressBarIcon.svg" alt="logo" />
        </ImageContainer>

        <ProgressStageText>ITEM1</ProgressStageText>

        </WProgressStage>
    )
}

const WProgressStage = w.div`
    flex flex-col items-center justify-center ml-1 
        `

const ImageContainer = w.div`
    bg-primaryBlue h-15 z-10 p-4 rounded-custom mt-20 shadow-custom`

const ProgressStageText = w.span`
    family-ubuntu text-primaryBlue font-normal mt-1 z-10 
    `