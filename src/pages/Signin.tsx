import { useRef } from "react";
import Button from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {

  const usernameRef = useRef<HTMLInputElement>()
  const passRef = useRef<HTMLInputElement>()
  const navigate = useNavigate()

  async function signin() {
    const username = usernameRef.current?.value
    const password = passRef.current?.value
    const response = await axios.post(`${BACKEND_URL}/api/signin`, {
      username,
      password
      
    })
    const jwt = response.data.token
    localStorage.setItem("token", jwt)
    navigate("/dashboard")
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tl from-[#007991] to-[#78ffd6]">
        <div className="bg-white rounded-xl border min-w-48 p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-center p-4">Sign In to your Account</h1>
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passRef} placeholder="Password"/>
            <div className="flex justify-center p-4">
                <Button onClick={signin} loading={false} variant="primary" size="md" text="Sign In" fullWidth={true}/>
            </div> 
            <div className="text-center">Dont have an account? <Link to="/signup" className="underline text-blue-500">Sign Up!</Link></div> 
        </div>
    </div>
  )
}
