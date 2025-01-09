// import { useNavigate } from "react-router-dom"
// import AllIcon from "../../icons/AllIcon"
// import { Logo } from "../../icons/Logo"
// import Logout from "../../icons/Logout"
// import { TwitterIcon } from "../../icons/TwitterIcon"
// import { YoutubeIcon } from "../../icons/YoutubeIcon"
// import SidebarItem from "./SidebarItem"

// function Sidebar({setFilteredType} : {setFilteredType: (type: string) => void}) {
//   const navigate = useNavigate()
//   return (
//     <div className="h-screen bg-white border border-r w-64 fixed top-0 left-0 pl-6 flex flex-col">
//         <div className="flex text-4xl pt-8 items-center">
//             <div className="pr-2">
//                 <Logo/>
//             </div>
//             <a href="/"> <h1 className="text-4xl text-center font-agu">ReMind</h1></a>
//         </div>

//         <div className="pt-8 pl-4 flex-grow">
//             <SidebarItem text="All Posts" icon={<AllIcon/>} onClick={() => setFilteredType("")}/>
//             <SidebarItem text="Twitter / X" icon={<TwitterIcon/>} onClick={() => setFilteredType("twitter")}/>
//             <SidebarItem text="Youtube" icon={<YoutubeIcon/>} onClick={() => setFilteredType("youtube")}/>
//         </div>
//         <div className="px-4 py-6">
//         <button
//           onClick={() => {
//             localStorage.removeItem("token"); // Clear the token (logout logic)
//             navigate("/"); // Reload to update UI or navigate to login
//           }}
//           className="flex gap-8 w-full text-black text-lg hover:shadow-xl duration-200 px-4 py-2 rounded-md shadow"
//         >
//           <Logout/> Logout
//         </button>
//       </div>
//     </div>

//   )
// }

// export default Sidebar



import { useNavigate } from "react-router-dom";
import AllIcon from "../../icons/AllIcon";
import { Logo } from "../../icons/Logo";
import Logout from "../../icons/Logout";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

function Sidebar({ setFilteredType }: { setFilteredType: (type: string) => void }) {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-white border border-r w-20 fixed top-0 left-0 flex flex-col transition-all duration-300 sm:w-64">
      {/* Logo Section */}
      <div className="flex items-center justify-center pt-8 sm:pt-4">
        <Logo />
        <a href="/" className="ml-2 hidden sm:block">
          <h1 className="text-4xl font-agu">ReMind</h1>
        </a>
      </div>

      {/* Sidebar Items */}
      <div className="pt-8 sm:pl-4 flex-grow">
        <SidebarItem
          text="All Posts"
          icon={<AllIcon />}
          onClick={() => setFilteredType("")}
        />
        <SidebarItem
          text="Twitter / X"
          icon={<TwitterIcon />}
          onClick={() => setFilteredType("twitter")}
        />
        <SidebarItem
          text="Youtube"
          icon={<YoutubeIcon />}
          onClick={() => setFilteredType("youtube")}
        />
      </div>

      {/* Logout Button */}
      <div className="px-4 py-6">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="flex items-center  gap-8 w-full text-black text-lg hover:shadow-xl duration-200 py-2 px-1 sm:px-6 sm:py-2 rounded-md shadow"
        >
          <Logout />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
