import React from 'react'
import { Video } from './Video'


interface Props {
    video: Video
}

const VideoItem = ({video}: Props) => {
    return (
        <div>
            <h1>{video.titulo}</h1>
            <p>{video.descripcion}</p>
    </div>
    )
}

export default VideoItem
