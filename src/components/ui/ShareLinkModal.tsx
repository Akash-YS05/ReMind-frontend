import { useEffect, useState } from 'react';
import useShareLink from '../../hooks/useShareLink'
import { CrossIcon } from '../../icons/CrossIcon'

//@ts-ignore
export default function ShareLinkModal({open, onClose}) {
    const {shareLink, getShareLink} = useShareLink();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        getShareLink()
    }, [getShareLink])

    const handleCopy = () => {
        if (shareLink) {
            navigator.clipboard.writeText(shareLink).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 8000); // Reset the message after 2 seconds
            });
        }
    };
  return (
    <div>
        {open && <div>
                <div className='opacity-80 h-screen w-screen top-0 left-0 fixed flex justify-center bg-slate-100'></div>
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white opacity-100 rounded-md p-4 border shadow-md">
                                <div className="flex justify-end">
                                    <div onClick={onClose} className="cursor-pointer">
                                        <CrossIcon/>
                                    </div>
                                </div>
                                <div className='font-bold text-center'>Here is your ReMind Share Link!</div>
                                <br />
                                <div className='border rounded-md border-black p-2'>{shareLink}</div>

                                <div className='flex justify-center'>
                                    <button onClick={handleCopy} className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 my-4">
                                        Copy
                                    </button>
                                </div>
                                {copied && (
                                <div className="text-green-500 text-center font-bold">
                                    Copied!
                                </div>
                            )}
                            </span>
                        </div>
                    </div>
            </div>
        }
    </div>
  )
}
