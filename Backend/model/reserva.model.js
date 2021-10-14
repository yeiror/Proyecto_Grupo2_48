import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const reservaSchema = new Schema({ 
    nombre_pelicula: {type: String, required: [true, 'Nombre de Pelicula obligatorio']}, 
    nombre_usuario: {type: String, required: [true, 'Nombre de Usuario obligatorio']},
    fecha_reserva: Date, 
    fecha_funcion: Date,
    sala: Number, 
    silla: String,
    total: Number, 
    activo: {type: Boolean, default: true}
});

// Convertir a modelo 
const reservaModel = mongoose.model('reserva', reservaSchema); 
export default reservaModel;