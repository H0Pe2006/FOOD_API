import { model, Schema } from 'mongoose';

// Definindo a classe Order e exportando-a
export const Order = model('Order', new Schema({
  // Campo 'table' que armazena o número da mesa como uma string obrigatória
  table: {
    type: String,
    required: true,
  },
  // Campo 'status' que controla o status do pedido ('WAITING', 'IN_PRODUCTION' ou 'DONE')
  // O valor padrão é 'WAITING'
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  // Campo 'createdAt' que armazena a data de criação do pedido
  // O valor padrão é a data atual
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Campo 'products' que armazena os produtos do pedido
  // É um array de objetos contendo informações sobre o produto e a quantidade
  products: {
    required: true,
    type: [{
      // Campo 'product' que armazena o ID do produto relacionado
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product', // Referenciando a classe 'Product'
      },
      // Campo 'quantity' que armazena a quantidade do produto no pedido
      // O valor padrão é 1
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
}));