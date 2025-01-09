
import { useNavigate } from "react-router-dom";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useEffect, useState } from "react";
import { Logo } from "../icons/Logo";

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

      <header className="flex justify-between items-center py-6 sm:p-6  text-white">
        <div className="flex items-center ml-2">
          <Logo/>
          <h1 className="text-4xl ml-2 font-agu text-black">ReMind</h1>
        </div>
        <div className="flex gap-4">

          {isLoggedIn ? (
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/api/dashboard")}
                className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="bg-white text-red-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/signin")}
                className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-white text-[#e96443] px-4 py-2 rounded shadow hover:bg-gray-100 transition"
              >
                Register
              </button>
            </div>
          )}

          
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter font-playwrite text-white md:leading-relaxed leading-normal sm:leading-relaxed mb-4">
          Save and Organize Your Favorite <br />
          <span className="text-red-600">YouTube</span> Videos and <span className="text-black">Tweets</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 font-quick">
          ReMind helps you save posts and videos from famous platforms like Twitter/X, YouTube, access them anytime, and share them with friends. Get started now and make sure you never lose track of important content!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={() => (isLoggedIn ? navigate("/api/dashboard") : navigate("/signup"))}
            className="bg-black text-white px-4 py-3 sm:px-6 sm:py-3 rounded-md font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-blue-950 hover:shadow-xl transition duration-200 w-full sm:w-auto"
          >
            <TwitterIcon /> Save Tweets
          </button>
          <button
            onClick={() => (isLoggedIn ? navigate("/api/dashboard") : navigate("/signup"))}
            className="bg-white text-red-600 px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold flex items-center gap-2 shadow-md hover:bg-red-400 hover:text-white hover:shadow-xl transition duration-200 w-full sm:w-auto"
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
