import { useQuery } from 'react-query'
import videoApi from 'src/api/video.api'
import Skeleton from 'src/components/Skeleton'
import VideoItem from '../VideoItem/VideoItem'
import Img404 from 'src/assets/404.svg'
import useQueryConfig from 'src/hook/useQueryConfig'
import { Navigate } from 'react-router-dom'
import path from 'src/constants/path'

interface VideoListProps {
  filter?: string
}
const VideoList = ({ filter }: VideoListProps) => {
  const queryConfig = useQueryConfig()

  const {
    data: VideoList,
    isSuccess: isSuccessVideoList,
    isLoading: isLoadingVideoList,
    isError,
    refetch
  } = useQuery({
    queryKey: 'videoList',
    queryFn: videoApi.getVideoAll,
    enabled: filter === '1'
  })

  const {
    data: getVideo,
    isSuccess,
    isLoading,
    isError: isErrorGetVideoCategory
  } = useQuery({
    queryKey: ['getVideo', queryConfig],
    queryFn: () => videoApi.searchVideo(queryConfig),
    enabled: filter !== '1'
  })

  const handleGetData = () => {
    refetch()
  }

  // console.log('VideoList:', VideoList)

  return (
    <div
      className={`${
        isError ? 'flex h-[100vh] items-center justify-center ' : 'grid'
      } h-full w-full grid-cols-1 flex-wrap overflow-y-auto md:mt-4 md:grid-cols-2 md:gap-5 md:px-3 lg:mt-0 lg:grid-cols-3 lg:px-16 lg:pt-6`}
    >
      {isLoadingVideoList &&
        filter === '1' &&
        Array(6)
          .fill(0)
          .map((item, index) => (
            <div className='mb-5 flex cursor-pointer flex-col gap-y-3' key={index}>
              <Skeleton className='h-48 w-full rounded-lg' />
              <div className='flex items-start gap-x-3 px-3 md:px-0'>
                <div className='relative h-8 w-8 flex-shrink-0 '>
                  <Skeleton className='h-full w-full rounded-full object-cover' />
                </div>
                <div className='flex w-full flex-col gap-y-3'>
                  <Skeleton className='h-4 w-full rounded' />
                  <Skeleton className='h-4 w-1/2 rounded' />
                  <Skeleton className='h-4 w-1/2 rounded' />
                </div>
              </div>
            </div>
          ))}

      {isSuccessVideoList &&
        filter === '1' &&
        VideoList.data.data?.map((item, index) => <VideoItem key={index} data={item} />)}

      {isLoading &&
        filter !== '1' &&
        Array(6)
          .fill(0)
          .map((item, index) => (
            <div className='mb-5 flex cursor-pointer flex-col gap-y-3' key={index}>
              <Skeleton className='h-48 w-full rounded-lg' />
              <div className='flex items-start gap-x-3 px-3 md:px-0'>
                <div className='relative h-8 w-8 flex-shrink-0 '>
                  <Skeleton className='h-full w-full rounded-full object-cover' />
                </div>
                <div className='flex w-full flex-col gap-y-3'>
                  <Skeleton className='h-4 w-full rounded' />
                  <Skeleton className='h-4 w-1/2 rounded' />
                  <Skeleton className='h-4 w-1/2 rounded' />
                </div>
              </div>
            </div>
          ))}

      {isSuccess &&
        filter !== '1' &&
        getVideo.data.data.videos?.length > 0 &&
        getVideo.data.data.videos?.map((item, index) => <VideoItem key={index} data={item} />)}

      {isSuccess && filter !== '1' && getVideo.data.data.videos?.length === 0 && (
        <div className='flex items-center justify-center'>
          <span className='text-base font-semibold text-black dark:text-white md:text-lg'>Không tìm thấy video</span>
        </div>
      )}

      {isError && <Navigate to={path.notfound} />}
      {isErrorGetVideoCategory && <Navigate to={path.notfound} />}
    </div>
  )
}

export default VideoList
