import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../config";

interface ShareLinkResponse {
    shareLink: string;
    error?: string;
  }

//   interface UseShareLink {
//     shareLink: string;
//     getShareLink: () => Promise<void>;
//   }

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
            setShareLink(`${BACKEND_URL}/api/brain/${response.data.hash}`)
        }
    }

  return {shareLink, getShareLink}
}
