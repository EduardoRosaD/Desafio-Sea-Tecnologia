import SideBar from '../components/SideBar'
import EmployeeRegistration from '@/components/EmployeeRegistration'
import { w } from "windstitch"

export default function Home() {
  return (
    <WMain>
      <SideBar />
      <WContent>
      <EmployeeRegistration />
      </WContent>
    </WMain>
  )
}

const WMain = w.div`
 flex align-center justify-between bg-[#F2F2F2]
`

const WContent = w.div`
  w-full h-screen bg-gray-100
`

