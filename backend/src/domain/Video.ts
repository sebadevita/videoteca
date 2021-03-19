import VideoSchema from '../routes/VideoSchema'

export default class Video extends VideoSchema{
    titulo: string
    descripcion: string
    url: string
    _id?: string
    createdAt?: string | Date
    updatedAt?: string | Date

    
 validarTitulo(){
        if(!this.titulo){
            throw Error ("El título es obligatorio")
        }
    }


}




//metodo validarCampos

//Library ClassTransformer para transformar el JSON de Mongo a class de TS (Plain to Class)
//metodo fromJson