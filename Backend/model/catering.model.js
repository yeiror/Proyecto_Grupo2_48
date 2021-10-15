import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const CateringSchema = new Schema({ 
    nombreCombo: {type: String, required: [true, 'Nombre obligatorio']}, 
    descripcion: Array, 
    precio: Number,
    foto: String,
    activo: {type: Boolean, default: true} 
    
});

// Convertir a modelo 
const CateringModel = mongoose.model('Catering', CateringSchema); 
export default CateringModel;

