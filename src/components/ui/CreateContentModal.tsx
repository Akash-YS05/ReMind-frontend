import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import Button from "./Button";
import { Input } from "./Input";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000

enum Type {
    Youtube = "youtube",
    Twitter = "twitter"
}
//@ts-ignore
export function CreateContentModal({open, onClose}) {

    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(Type.Youtube)

    async function addContent() {
        const title= titleRef.current?.value
        const link = linkRef.current?.value

        await axios.post(`${BACKEND_URL}/api/content`, {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose()
    }

    
    return (
        <div>
            {open && <div>
                 <div className="w-screen h-screen fixed top-0 left-0 bg-slate-100 flex justify-center opacity-80"></div>
                    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <span className="bg-slate-100 opacity-100 rounded p-4 border">
                                <div className="flex justify-end">
                                    <div onClick={onClose} className="cursor-pointer">
                                        <CrossIcon/>
                                    </div>
                                </div>
                                <div>
                                    <Input reference={titleRef} placeholder="Title"/>
                                    <Input reference={linkRef} placeholder="Link"/>
                                </div>
                                <div>
                                    <h1>Select the Type of your Post</h1>
                                    <div className="flex gap-4 p-4 pb-8 justify-center items-center">
                                        <Button text="Youtube" variant={type === Type.Youtube ? "primary" : "secondary"} size="md" onClick={() => {
                                            setType(Type.Youtube)
                                        }}/>
                                        <Button text="Twitter" variant={type === Type.Twitter ? "primary" : "secondary"} size="md" onClick={() => {
                                            setType(Type.Twitter)
                                        }}/>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <Button onClick={addContent} variant="secondary" text="Submit" size="md"/>
                                </div>  
                            </span>
                        </div>
                    </div>
                
            </div>
            }
        </div>
        
    )
}