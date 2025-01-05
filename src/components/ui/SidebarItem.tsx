import { ReactElement } from "react"

interface SidebarItemProps {
  text: string,
  icon: JSX.Element,
  onClick: ()=>void
}

function SidebarItem({text, icon, onClick}: SidebarItemProps) {
  return (
    <div className="flex my-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200 rounded-lg max-w-48 pl-4 transition-all duration-150" onClick={onClick}>
        <div className="pr-2 min-w-11">
            {icon}
        </div>
        <div className="text-lg">
            {text}
        </div>
    </div>
  )
}

export default SidebarItem
