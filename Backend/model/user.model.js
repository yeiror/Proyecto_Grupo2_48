import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 
const UserSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    rol: {type: String, require: [true, 'Rol del usuario obligatorio']}, 

});

// Convertir a modelo 
const userModel = mongoose.model('User', UserSchema); 
export default userModel;