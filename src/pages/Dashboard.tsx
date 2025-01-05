
// import { useEffect, useState } from 'react'
// import Button from '../components/ui/Button'
// import { Card } from '../components/ui/Card'
// import { CreateContentModal } from '../components/ui/CreateContentModal'
// import Sidebar from '../components/ui/Sidebar'
// import { PlusIcon } from '../icons/PlusIcon'
// import { ShareIcon } from '../icons/ShareIcon'
// import useContent from '../hooks/useContent'
// import ShareLinkModal from '../components/ui/ShareLinkModal'


// const WaveBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 560">
//         <defs>
//           <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
//             <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
//           </linearGradient>
//         </defs>
        
//         <path
//           className="animate-wave1"
//           fill="url(#gradient1)"
//           d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         />
        
//         <path
//           className="animate-wave2"
//           fill="url(#gradient1)"
//           d="M0,224L48,224C96,224,192,224,288,234.7C384,245,480,267,576,266.7C672,267,768,245,864,234.7C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         />
//       </svg>
//     </div>
//   );
// };


// function Dashboard() {

//   const [modalOpen, setModalOpen] = useState(false)
//   const [shareModalOpen, setShareModalOpen] = useState(false)
//   const {contents, refresh} = useContent()

//   useEffect(() => {
//     refresh()
//   }, [modalOpen, shareModalOpen])


//   return (
//     <div>
//       <div>
//         <Sidebar/>
//       </div>

//       <div className="relative">
//       <WaveBackground />
//       </div>
      
//       <div className='p-4 ml-64 min-h-screen bg-gray-100'>
//         <CreateContentModal open={modalOpen} onClose={() => {
//           setModalOpen(false)
//         }}/>
//         <ShareLinkModal open={shareModalOpen} onClose={() => {
//           setShareModalOpen(false)
//         }}/>
//         <div className='flex justify-end gap-4'>
//           <Button onClick={() => {
//             setModalOpen(true)
//           }} startIcon={<PlusIcon size="lg"/>} variant={"primary"} text={"Add Content"} size={"md"}></Button>

//           <Button onClick={() => {
//             setShareModalOpen(true)
//           }} startIcon={<ShareIcon size='md'/>} variant={"secondary"} text={"Share Space"} size={"md"} ></Button>
//         </div>
//         <div className='font-bold text-3xl mb-2'>Saved Posts</div>

//         <div className='flex flex-wrap gap-4 py-4'>
//           {contents.map(({type, title, link}) => <Card
//             title={title} 
//             link={link} 
//             type={type}/>
//           )}
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard


import { useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import Sidebar from '../components/ui/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import useContent from '../hooks/useContent'
import ShareLinkModal from '../components/ui/ShareLinkModal'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const WaveBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -10,
      overflow: 'hidden'
    }}>
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 1000">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="50%" stopColor="#A1FFCE" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FAFFD1" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        <path
          fill="url(#gradient1)"
          d="M0,0 
             L1440,0 
             L1440,800 
             C1320,750
               1080,300
               960,900
               C840,700
               480,350
               360,400
               C240,550
               120,150
               0,300
             L0,800 
             Z"
        />
      </svg>
    </div>
  );
};



function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const {contents, refresh} = useContent()
  const [filteredType, setFilteredType] = useState<string | null>(null)

  useEffect(() => {
    refresh()
  }, [modalOpen, shareModalOpen])
  //@ts-ignore
  const filteredContent = filteredType ? contents.filter((content) => content.type === filteredType) : contents
  if (!filteredContent) {
    // Ensure `filteredContent` is not undefined
    return <div>Loading...</div>;
  }
  return (
    <div style={{ position: 'relative' }}>
      <WaveBackground />
      <div>
        <Sidebar setFilteredType={setFilteredType}/>
      </div>
      <div className='ml-64 p-2 min-h-screen bg-transparent'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }}/>
        <ShareLinkModal open={shareModalOpen} onClose={() => {
          setShareModalOpen(false)
        }}/>
        <div className='flex justify-between pb-8'>
          <div className='font-bold text-5xl mb-2 pt-8 pl-4 font-agu'>{filteredType ? `${filteredType.charAt(0).toUpperCase()}${filteredType.slice(1)} Posts` : "Saved Posts"}</div>

          <div className='flex justify-between gap-4 pt-8 pr-4'>
          <Button onClick={() => {
            setModalOpen(true)
          }} startIcon={<PlusIcon size="lg"/>} variant={"primary"} text={"Add Content"} size={"md"}></Button>

          <Button onClick={() => {
            setShareModalOpen(true)
          }} startIcon={<ShareIcon size='md'/>} variant={"secondary"} text={"Share Space"} size={"md"} ></Button>
          </div>
          
        </div>

        <div className='flex flex-wrap gap-3 py-4'>
          {filteredContent.map(({type, title, link, _id}) => <Card
            key={_id}
            title={title} 
            link={link} 
            type={type}
            _id={_id}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;