import mongoose, { ConnectOptions } from 'mongoose'
import config from './config'


(async () => {

    try {
        const mongooseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASSWORD,
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}'`, mongooseOptions)
        console.log('La base esta conectada a: ', db.connection.name)

    } catch (error) {
        console.error(error)
    }

})()
