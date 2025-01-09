

import { useEffect, useState } from 'react'
import Button from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import Sidebar from '../components/ui/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import useContent from '../hooks/useContent'
import ShareLinkModal from '../components/ui/ShareLinkModal'

export const WaveBackground = () => {
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
    return <div>Loading...</div>;
  }
  return (
    <div style={{ position: 'relative' }}>
      <WaveBackground />
      <div>
        <Sidebar setFilteredType={setFilteredType}/>
      </div>
      <div className='ml-20 sm:ml-64 p-2 min-h-screen bg-transparent'>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false)
        }}/>
        <ShareLinkModal open={shareModalOpen} onClose={() => {
          setShareModalOpen(false)
        }}/>
        <div className='flex justify-between pb-8'>
          <div className='text-4xl lg:text-5xl mb-2 pt-8 pr-2 md:pl-4 font-agu'>{filteredType ? `${filteredType.charAt(0).toUpperCase()}${filteredType.slice(1)} Posts` : "Saved Posts"}</div>

          <div className='flex justify-between flex-col md:flex-row gap-4 pt-8 pr-4'>
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
            _id={_id}
            canDelete = {true}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;