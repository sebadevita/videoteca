import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Video} from './Video'
import * as VideoService from './VideoService'
import VideoItem from './VideoItem'



const VideosList = () => {


    const [videos, setVideos] = useState<Video[]>([])

    const getVideos = async () => {
        const res = await VideoService.getVideos()

        const videosOrdenados = res.data.map(video => {
            return{
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),

            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

        setVideos(videosOrdenados)

    }
       

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <div className= "row">
            {videos.map((video) => {
                return <VideoItem video = {video} key={video._id} getVideos={getVideos} />
            })}
        </div>
    )
}

export default VideosList
