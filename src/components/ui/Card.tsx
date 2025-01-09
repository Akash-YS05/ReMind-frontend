import axios from "axios";
import DeleteIcon from "../../icons/DeleteIcon";
import LinkIcon from "../../icons/LinkIcon";
import { ShareIcon } from "../../icons/ShareIcon";
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000
import { useState } from "react";

interface CardProps {
    title: string,
    link: string,
    _id: string,
    type: "twitter" | "youtube"
    canDelete: boolean
}


export function Card({title, link, type, _id, canDelete} : CardProps) {
    const [isDeleting, setIsDeleting]= useState(false)
    const [deleteMessage, setDeleteMessage] = useState<string | null>(null)

    async function handleDelete() {
        setIsDeleting(true)
        setDeleteMessage("Deleting...")
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        await axios.delete(`${BACKEND_URL}/api/content?_id=${_id}`, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })

        setDeleteMessage("Post deleted succesfully!")
        setTimeout(() => setDeleteMessage(null), 3000)
        setIsDeleting(false)
    }
    
    return (
        <div>
            <div className="max-w-80 min-h-44 min-w-72 p-4 border border-gray-100 rounded-md shadow-md">
                <div className="flex justify-between">
                    <div className="flex items-center font-bold">
                    <a href={link} target="_blank">
                        <div className="pr-2 text-gray-500 hover:text-black">
                            <LinkIcon/>
                        </div>
                    </a>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <a href={link} target="_blank">
                            <div className="pr-2 text-gray-500 hover:text-black">
                                <ShareIcon size="md"/>
                            </div>
                        </a>
                        
                        {canDelete && ( <div className={`pr-2 text-gray-500 cursor-pointer hover:text-black ${isDeleting? handleDelete: undefined}`} onClick={!isDeleting ? handleDelete : undefined}>
                            <DeleteIcon/>
                        </div>)}
                    </div>
                </div>

                <div className="pt-6 px-1 h-44 overflow-y-auto">
                    {type === "youtube" && <iframe className="w-full rounded-md" src={link.replace("/watch?v=", "/embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    
                    {type === "twitter" && <blockquote className="twitter-tweet w-full">
                        <a href={link.replace("x.com", "twitter.com")}></a> 
                    </blockquote>}
                    
                </div>

                {deleteMessage && (
                    <div className="mt-2 text-center text-sm text-gray-700 bg-gray-100 p-2 rounded-md">{deleteMessage}</div>
                )}
                
            </div>
        </div>
        
    )
}