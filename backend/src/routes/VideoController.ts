import { RequestHandler } from "express"
// import Video from './Video'
import Video from "../domain/Video"

export const crearVideo: RequestHandler = async (req, res) => {
  try {
    const videoEncontrado = await Video.findOne({ url: req.body.url })
  if (videoEncontrado) {
    return res.status(301).json({ message: "La URL ya existe" })
  }
  //Castear lo que trae la petición a un Video del back con los datos del "req.body"
  const video = new Video(req.body)

  video.validarTitulo()

  const videoNuevo = await video.save()
  res.json(videoNuevo)
  } catch (error) {
      res.status(400).json({message: error.messages})
  }
}

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    return res.json(videos)
  } catch (error) {
    res.json(error)
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  const videoEncontrado = await Video.findById(req.params.id)

  if (!videoEncontrado) {
    return res.status(204).json()
  }
  return res.json(videoEncontrado)
}

export const eliminarVideo: RequestHandler = async (req, res) => {
  const videoEncontrado = await Video.findByIdAndDelete(req.params.id)

  if (!videoEncontrado) {
    return res.status(204).json()
  }
  return res.json(videoEncontrado)
}

export const actualizarVideo: RequestHandler = async (req, res) => {
  const videoEncontrado = await Video.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  if (!videoEncontrado) {
    return res.status(204).json()
  }
  return res.json(videoEncontrado)
}
