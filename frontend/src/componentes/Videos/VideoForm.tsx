import React, { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Video } from "./Video"
import * as VideoService from "./VideoService"

type InputChange =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>

interface Params {
  id: string
}

const VideoForm = () => {
  const history = useHistory()
  const params = useParams<Params>()

  const estadoInicial = {
    titulo: "",
    descripcion: "",
    url: "",
  }

  const [video, setVideo] = useState<Video>(estadoInicial)
  const [error, setError] = useState('')
  const [fallo, setFallo] = useState(false)

  const validarTitulo = () => {
    if (!video.titulo) {
      setFallo(true)
      setError("El campo título es obligatorio")
      
    }
  }
  
  const validarUrl = () => {
    if (!video.url) {
      setFallo(true)
      setError("El campo URL es obligatorio")
      
    }
  }

  const validarErrores = () => {
    validarTitulo()
    validarUrl()
  }

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validarErrores()
    if (!params.id) {
      await VideoService.crearVideo(video)
      toast.success("El video se subió correctamente!")
      setVideo(estadoInicial)
    } else {
      await VideoService.actualizarVideo(params.id, video)
      history.push("/")
    }
  }

  const getVideo = async (id: string) => {
    const res = await VideoService.getVideo(id)
    const { titulo, descripcion, url } = res.data
    setVideo({ titulo, descripcion, url })
  }

  useEffect(() => {
    if (params.id) getVideo(params.id)
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {params.id ? <h3>Actualizar video</h3> : <h3>Subir video</h3>}

            

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

              {
              fallo ? (
                <span>{error}</span>
              ):

                <span></span>
            }

              {params.id ? (
                <button className="btn btn-secondary">Actualizar video</button>
              ) : (
                <button className="btn btn-primary">Subir video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoForm
