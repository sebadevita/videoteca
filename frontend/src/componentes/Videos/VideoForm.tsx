import React, { ChangeEvent, FormEvent, useState} from "react";
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";
import { Video } from "./Video";
import * as VideoService from "./VideoService";

type InputChange =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

const VideoForm = () => {

  const history = useHistory()

  const estadoInicial = {
    titulo: "",
    descripcion: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(estadoInicial);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await VideoService.crearVideo(video);
    toast.success("El video se subió correctamente!");
    setVideo(estadoInicial)
    // history.push('/')
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Subir video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="titulo"
                  placeholder="Ingrese el titulo del video..."
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.titulo}
                  autoFocus
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://ejemplo.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                  autoFocus
                ></input>
              </div>

              <div className="form-group">
                <textarea
                  name="descripcion"
                  placeholder="Ingrese una descripción del video..."
                  rows={3}
                  onChange={handleInputChange}
                  value={video.descripcion}
                  className="form-control"
                ></textarea>
              </div>

              <button className="btn btn-primary">Subir video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
