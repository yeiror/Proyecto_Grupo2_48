import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const peliSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    genero: String,
    fecha_estreno:{type: Date},
    fecha_final:{type: Date}, 
    sala: Number,
    formatos: Array,
    actores: Array,
    activo: {type: Boolean, default: true} 

});

// Convertir a modelo 
const peliculaModel = mongoose.model('Peliculas', peliSchema); 
export default peliculaModel;