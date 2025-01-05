import AllIcon from "../../icons/AllIcon"
import { Logo } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

function Sidebar({setFilteredType} : {setFilteredType: (type: string) => void}) {
  return (
    <div className="h-screen bg-white border border-r w-64 fixed top-0 left-0 pl-6">
        <div className="flex text-4xl pt-8 items-center">
            <div className="pr-2">
                <Logo/>
            </div>
            <h1 className="text-4xl text-center font-bold font-agu">ReMind</h1>
        </div>

        <div className="pt-8 pl-4">
            <SidebarItem text="All Posts" icon={<AllIcon/>} onClick={() => setFilteredType("")}/>
            <SidebarItem text="Twitter / X" icon={<TwitterIcon/>} onClick={() => setFilteredType("twitter")}/>
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>} onClick={() => setFilteredType("youtube")}/>
        </div>
    </div>

  )
}

export default Sidebar
