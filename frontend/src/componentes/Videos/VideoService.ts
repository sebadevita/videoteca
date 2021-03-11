import axios from 'axios'
import { Video } from './Video'

const API_URL = 'http://localhost:5000/videos'


export const getVideos = async () => {
    return await axios.get(API_URL)

}

export const crearVideo = async (video: Video) => {
    return await axios.post(API_URL, video)
}

