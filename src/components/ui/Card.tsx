import axios from "axios";
import DeleteIcon from "../../icons/DeleteIcon";
import LinkIcon from "../../icons/LinkIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { BACKEND_URL } from "../../config";

interface CardProps {
    title: string,
    link: string,
    _id: string,
    type: "twitter" | "youtube"
}


export function Card({title, link, type, _id} : CardProps) {

    async function handleDelete() {
        const response = await axios.delete(`${BACKEND_URL}/api/content?_id=${_id}`, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        })
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
                            <div className="pr-2 text-gray-500">
                                <ShareIcon size="md"/>
                            </div>
                        </a>
                        
                        <div className="pr-2 text-gray-500 cursor-pointer hover:text-black" onClick={handleDelete}>
                            <DeleteIcon/>
                        </div>
                    </div>
                </div>
                <div className="pt-6 px-1 h-44 overflow-y-auto">
                    {type === "youtube" && <iframe className="w-full rounded-md" src={link.replace("/watch?v=", "/embed/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                    
                    {type === "twitter" && <blockquote className="twitter-tweet w-full">
                        <a href={link.replace("x.com", "twitter.com")}></a> 
                    </blockquote>}
                    
                </div>
                
            </div>
        </div>
        
    )
}