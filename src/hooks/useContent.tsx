import axios from "axios"
import { useEffect, useState } from "react"
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000

export default function useContent() {
    const [contents, setContents] = useState([])
    
    function refresh() {
        axios.get(`${BACKEND_URL}/api/content`, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
            .then((response) => {
                setContents(response.data.content)
            })
    }
    
    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10*1000);

        return() => {
            clearInterval(interval)
        }
    },[])

  return {contents, refresh}
}
