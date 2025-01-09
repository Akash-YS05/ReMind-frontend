import { useRef } from "react";
import Button from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const usernameRef = useRef<HTMLInputElement>()
  const passRef = useRef<HTMLInputElement>()
  const navigate = useNavigate()

  async function signup() {
    const username = usernameRef.current?.value
    const password = passRef.current?.value
    await axios.post(`${BACKEND_URL}/api/signup`, {
      username,
      password
      
    })
    alert("Signup succesful")
    navigate("/api/signin")
  }
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-tl from-[#007991] to-[#78ffd6]">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <h1 className="text-2xl font-bold text-center p-4">Register your Account</h1>
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passRef} placeholder="Password"/>
            <div className="flex justify-center p-4">
                <Button onClick={signup} loading={false} variant="primary" size="md" text="Sign up" fullWidth={true}/>
            </div>  
            <div className="text-center">Already have an account? <a href="/api/signin" className="underline text-blue-500">Login!</a></div> 

        </div>
    </div>
  )
}
