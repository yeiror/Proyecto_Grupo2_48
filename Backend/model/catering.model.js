import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const CateringSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: String, 
    precio: Number,
    imagen: String,
    activo: {type: Boolean, default: true} 
});

// Convertir a modelo 
const CateringModel = mongoose.model('Catering', CateringSchema); 
export default CateringModel;