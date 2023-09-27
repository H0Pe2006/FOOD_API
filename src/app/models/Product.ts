import { model, Schema } from 'mongoose';

// Definindo a classe Product e exportando-a
export const Product = model('Product', new Schema({
  // Campo 'name' que armazena o nome do produto como uma string obrigatória
  name: {
    type: String,
    required: true,
  },
  // Campo 'description' que armazena a descrição do produto como uma string obrigatória
  description: {
    type: String,
    required: true,
  },
  // Campo 'imagePath' que armazena o caminho da imagem do produto como uma string obrigatória
  imagePath: {
    type: String,
    required: true,
  },
  // Campo 'price' que armazena o preço do produto como um número obrigatório
  price: {
    type: Number,
    required: true,
  },
  // Campo 'ingredients' que armazena os ingredientes do produto
  // É um array de objetos contendo informações sobre o nome e o ícone de cada ingrediente
  ingredients: {
    required: true,
    type: [{
      // Campo 'name' que armazena o nome do ingrediente como uma string obrigatória
      name: {
        type: String,
        required: true,
      },
      // Campo 'icon' que armazena o ícone do ingrediente como uma string obrigatória
      icon: {
        type: String,
        required: true,
      },
    }],
  },
  // Campo 'category' que armazena a categoria do produto como uma referência ao objeto 'Category'
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}));