import express from 'express'

const app = express()

app.listen(5000, () => {
    console.log("Servidor en el puerto 5000")
})

export default app