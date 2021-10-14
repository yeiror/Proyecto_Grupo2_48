import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const PeliSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    genero: String,
    fecha_estreno:{type: Date},
    fecha_final:{type: Date}, 
    sala: String,
    activo: {type: Boolean, default: true} 
});

// Convertir a modelo 
const peliculaModel = mongoose.model('Peliculas', PeliSchema); 
export default peliculaModel;