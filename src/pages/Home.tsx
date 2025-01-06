// import { useNavigate } from "react-router-dom";
// import { TwitterIcon } from "../icons/TwitterIcon";
// import { YoutubeIcon } from "../icons/YoutubeIcon";
// import { Logo } from "../icons/Logo";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col">
//       {/* Header Section */}
//       <header className="flex justify-between items-center p-6 bg-blue-600 text-white">
//         <div className="flex items-center">
//           {/* <Logo className="w-10 h-10" /> */}
//           <h1 className="text-4xl font-bold ml-2 font-agu">ReMind</h1>
//         </div>
//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
//           >
//             Go to Dashboard
//           </button>
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
//           >
//             Register
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
//         <h1 className="text-5xl font-extrabold font-playwrite text-white leading-relaxed mb-4">
//           Save and Organize Your Favorite <br /> YouTube Videos and Tweets
//         </h1>
//         <p className="text-white text-lg max-w-2xl mb-8 font-quick">
//           ReMind helps you save posts and videos, access them anytime, and share them with friends. Get started now and make sure you never lose track of important content!
//         </p>

//         {/* Action Buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-black text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-gray-700 transition"
//           >
//             <TwitterIcon /> Save Tweets
//           </button>
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="bg-red-400 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-red-700 transition"
//           >
//             <YoutubeIcon /> Save YouTube Videos
//           </button>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-700 text-white py-4 text-center">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} ReMind. Built to keep your favorite posts in one place.
//         </p>
//       </footer>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  })

  function handleLogout() {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#FF5F6D] to-[#FFC371]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2C3E50] to-[#FD746C]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1140 320"
          className="absolute w-full h-96 text-blue-400 top-0"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,282.7C480,288,600,256,720,213.3C840,171,960,117,1080,96C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <header className="flex justify-between items-center p-6  text-white">
        <div className="flex items-center">
          {/* <Logo className="w-10 h-10" /> */}
          <h1 className="text-4xl font-bold ml-2 font-agu">ReMind</h1>
        </div>
        <div className="flex gap-4">
          {/* <button
            onClick={() => navigate("/api/dashboard")}
            className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
          >
            Go to Dashboard
          </button> */}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-red-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
            >
              Logout
          </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/api/signin")}
                className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/api/signup")}
                className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Register
              </button>
            </>
          )}

          
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight font-playwrite text-white leading-relaxed mb-4">
          Save and Organize Your Favorite <br /> <span className="text-red-600">YouTube</span> Videos and <span className="text-black">Tweets</span>
        </h1>
        <p className="text-white text-xl max-w-3xl mb-8 font-quick">
          ReMind helps you save posts and videos, access them anytime, and share them with friends. Get started now and make sure you never lose track of important content!
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-black text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-slate-800  hover:shadow-xl transition duration-200"
          >
            <TwitterIcon /> Save Tweets
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-red-600 px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-red-400 hover:text-white hover:shadow-xl transition duration-200"
          >
            <YoutubeIcon /> Save YouTube Videos
          </button>
        </div>
      </main>

      <footer className=" text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ReMind. Built to keep your favorite posts in one place.
        </p>
      </footer>
    </div>
  );
}
