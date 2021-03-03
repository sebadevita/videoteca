import {Router} from 'express'
const router = Router()

router.get('/videos', (req, res) => res.json("obteniendo videos")) 


export default router