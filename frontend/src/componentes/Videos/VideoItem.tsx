import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom'
import * as VideoService from "./VideoService";

import './VideoItem.css'

interface Props {
  video: Video
  getVideos: () => void
}



const VideoItem = ({ video, getVideos }: Props) => {
  
  const handleDelete = async (id: string) => {
    await VideoService.eliminarVideo(id)
    getVideos()
  
  }
    const history = useHistory()


  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{cursor: 'pointer'}}>
            
        <div className="d-flex justify-content-between">
          <h1 onClick={()=> history.push(`/actualizar-video/${video._id}`)}>{video.titulo}</h1>
          <span className="text-danger" onClick={() => video._id && handleDelete(video._id)}>X</span>
        </div>
        <p>{video.descripcion}</p>

        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
