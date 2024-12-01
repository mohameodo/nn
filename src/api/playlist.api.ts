import { playList } from 'src/types/playList.type'
import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import { Video } from 'src/types/video.type'
import http from 'src/utils/http'

const URL_PLAYLIST = '/rest/v1/playlists'
const URL_CHANNEL = '/rest/v1/channels'

const playListAPI = {
  getPlayList: () => {
    return http.get<SuccessResponse<playList[]>>(`${URL_PLAYLIST}`)
  },
  createPlayList: (data: { title: string; description: string }) => {
    return http.post(`${URL_PLAYLIST}`, data)
  },
  getPlayListById: (channelId: string) => {
    return http.get<SuccessResponse<playList[]>>(`${URL_CHANNEL}?id=eq.${channelId}&select=playlists`)
  },
  getVideoById: (channelId: string) => {
    return http.get<SuccessResponse<Video[]>>(`${URL_CHANNEL}?id=eq.${channelId}&select=videos`)
  },
  getChannelById: (channelId: string) => {
    return http.get<SuccessResponse<User>>(`${URL_CHANNEL}?id=eq.${channelId}&select=*`)
  },
  VideoToPlayList: (data: { action: string; video: string; idPlayList: string }) => {
    return http.patch(`${URL_PLAYLIST}?id=eq.${data.idPlayList}`, { action: data.action, video: data.video })
  },
  getPlayListVideoById: (id: string) => {
    return http.get<SuccessResponse<playList>>(`${URL_PLAYLIST}?id=eq.${id}`)
  }
}

export default playListAPI
