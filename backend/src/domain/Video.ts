class Video{
    titulo: string
    descripcion: string
    url: string
    _id?: string
    createdAt?: string | Date
    updatedAt?: string | Date
}


//metodo validarCampos

//Library ClassTransformer para transformar el JSON de Mongo a class de TS (Plain to Class)
//metodo fromJson