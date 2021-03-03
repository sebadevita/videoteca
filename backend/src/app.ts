import express, { urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

import videoRoutes from './routes/VideoRoutes'

const app = express()

app.set('port', config.PORT || 4000 )

app.use(morgan('dev'))
app.use(cors())
app.use(express.json)
app.use(urlencoded({extended: false}))
app.use(videoRoutes)



export default app