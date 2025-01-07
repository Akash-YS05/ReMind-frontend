import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import { SharedBrain } from "./pages/SharedBrain"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="api/signup" element={<Signup/>}/>
        <Route path="api/signin" element={<Signin/>}/>
        <Route path="api/dashboard" element={<Dashboard/>}/>
        <Route path="api/brain/:shareLink" element={<SharedBrain/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
