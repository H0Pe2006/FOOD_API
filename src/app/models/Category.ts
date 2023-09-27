import { model, Schema } from 'mongoose';

// Define o modelo 'Category' usando o Mongoose
export const Category = model('Category', new Schema({
  name: {
    type: String,
    required: true // O campo 'name' é obrigatório
  },
  icon: {
    type: String,
    required: true // O campo 'icon' também é obrigatório
  }
}));