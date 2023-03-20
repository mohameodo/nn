import { SiSublimetext } from 'react-icons/si'
import AsideBar from './components/AsideBar'
import VideoList from './components/VideoList'

const HomePage = () => {
  return (
    <>
      <div className='container flex pl-2 pr-2'>
        {/* <AsideBar /> */}
        <VideoList />
      </div>
    </>
  )
}

export default HomePage
