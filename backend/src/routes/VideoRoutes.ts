import {Router} from 'express'
const router = Router()

import * as videoController from './VideoController'

router.get('/videos', videoController.getVideos)

router.post('/videos', videoController.crearVideo)

router.get('/videos/:id', videoController.getVideo)

router.delete('/videos/:id', videoController.eliminarVideo)

router.put('/videos/:id', videoController.actualizarVideo)


export default router