import {Schema, model} from 'mongoose'

const videoSchema = new Schema ({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String,
        trim: true
    },
    url:{
        type: String,
        required: true,
        trim: true
    }
}, { 
        versionKey: false,
        timestamps: true,
    })

export default model('Video', videoSchema)