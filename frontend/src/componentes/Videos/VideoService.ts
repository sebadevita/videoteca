import axios from 'axios'

const API_URL = 'http://localhost:5000/videos'


export const getVideos = async () => {
    return await axios.get(API_URL)
}