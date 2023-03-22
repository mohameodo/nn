import { RxDividerHorizontal } from 'react-icons/rx'
interface VideoItemProps {
  data: {
    thumbnail: string
    avatar: string
    title: string
    user: string
    view: number
    dataSubmitted: number
  }
}
const VideoItem = (props: VideoItemProps) => {
  const { data } = props
  return (
    <div className='mb-5 flex cursor-pointer flex-col gap-y-2'>
      <img src={data.thumbnail} alt='thumbnail' className='h-[12rem] w-full rounded-xl object-cover' />
      <div className='flex items-start gap-x-2'>
        <div className='h-8 w-8 flex-shrink-0'>
          <img src={data.avatar} alt='avartar' className='h-full w-full rounded-full object-cover' />
        </div>
        <div className='flex flex-col gap-y-1'>
          <span className='text-xs font-semibold text-black line-clamp-2 dark:text-white'>{data.title}</span>
          <span className='text-xs text-[#666d74] dark:text-gray-400'>{data.user}</span>
          <div className='flex items-center gap-x-1'>
            <span className='text-xs text-[#666d74] dark:text-gray-400'>{data.view} N lượt xem</span>
            <RxDividerHorizontal className='h-3 w-3 text-[#666d74] dark:text-gray-400' />
            <span className='text-xs text-[#666d74] dark:text-gray-400'>{data.dataSubmitted} tháng trước</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoItem