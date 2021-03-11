import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom'

import './VideoItem.css'

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {

    const history = useHistory()


  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{cursor: 'pointer'}}
        onClick={()=> history.push(`/actualizar-video/${video._id}`)}>
            
        <div className="d-flex justify-content-between">
          <h1>{video.titulo}</h1>
          <span className="text-danger">X</span>
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
