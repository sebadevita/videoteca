import {RequestHandler} from 'express'

export const crearVideo: RequestHandler = (req, res) => {
    res.json('creando videos')
}

export const getVideos: RequestHandler = (req, res) => {
    res.json('obteniendo videos')
}

export const getVideo: RequestHandler = (req, res) => {
    res.json('obteniendo video')
}

export const eliminarVideo: RequestHandler = (req, res) => {
    res.json('eliminando videos')
}

export const actualizarVideo: RequestHandler = (req, res) => {
    res.json('actualizando videos')
}