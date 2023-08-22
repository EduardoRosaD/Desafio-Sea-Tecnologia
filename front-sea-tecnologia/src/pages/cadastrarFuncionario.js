import SideBar from '../components/SideBar'
import ProgressBar from '../components/EmployeeRegistration/progressBar'
import { w } from "windstitch"

export default function Home() {
  return (
    <WMain>
      <SideBar />
      <WContent>
      <ProgressBar />
      </WContent>
    </WMain>
  )
}

const WMain = w.div`
 flex align-center justify-between
`

const WContent = w.div`
  w-full h-screen bg-gray-100
`

