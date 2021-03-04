import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Video} from './Video'
import * as VideoService from './VideoService'
import VideoItem from './VideoItem'



const VideosList = () => {


    const [videos, setVideos] = useState<Video[]>([])

    const getVideos = async () => {
        const res = await VideoService.getVideos()
        setVideos(res.data)

    }
       

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <div>
            {videos.map((video) => {
                return <VideoItem video = {video} />
            })}
        </div>
    )
}

export default VideosList
