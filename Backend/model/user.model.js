import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const UserSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    documento: {type: Number, required: [true, 'Numero obligatorio']},
    correo: {type: String, required: [true, 'Correo obligatorio']},
    celular:Number,
    contrasena: {type: String, required: [true, 'Nombre obligatorio']},
   // rol: {type: String, require: [true, 'Rol del usuario obligatorio']}, 

});

// Convertir a modelo 
const userModel = mongoose.model('User', UserSchema); 
export default userModel;