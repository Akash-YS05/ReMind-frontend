import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="api/signup" element={<Signup/>}/>
        <Route path="api/signin" element={<Signin/>}/>
        <Route path="api/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
