import axios from "axios";
import { useState } from "react"
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_API_URL

interface ShareLinkResponse {
    shareLink: string;
    error?: string;
  }

export default function useShareLink() {
    const [shareLink, setShareLink] = useState('');

    async function getShareLink(): Promise<void> {
        const response = await axios.post(`${BACKEND_URL}/api/brain/share`,
            { share: true },
            {
                headers: {
                    "Authorization" : localStorage.getItem("token")
                },
            })
        if (response.data.hash){
            setShareLink(`${FRONTEND_URL}/api/brain/${response.data.hash}`)
        }
    }

  return {shareLink, getShareLink}
}
