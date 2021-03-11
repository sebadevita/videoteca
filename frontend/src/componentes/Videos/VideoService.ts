import axios from 'axios'
import { Video } from './Video'

const API_URL = 'http://localhost:5000/videos'


export const getVideos = async () => {
    return await axios.get<Video[]>(API_URL)

}

export const crearVideo = async (video: Video) => {
    return await axios.post(API_URL, video)
}

export const getVideo = async (id: string) => {
    return await axios.get<Video>(`${API_URL}/${id}`)

}

export const actualizarVideo = async (id: string, video:Video) => {
    return await axios.put<Video>(`${API_URL}/${id}`, video)

}

export const eliminarVideo = async (id: string) => {
    return await axios.delete<Video>(`${API_URL}/${id}`)

}
