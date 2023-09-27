import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Função assíncrona para listar todos os pedidos
export async function listOrders(req: Request, res: Response) {
	try {
		// Consulta todos os pedidos no banco de dados
		// - Usa o método 'find()' para buscar todos os documentos na coleção 'Order'
		// - Ordena os resultados por 'createdAt' em ordem crescente (1)
		// - Usa 'populate' para preencher os detalhes dos produtos relacionados
		const orders = await Order.find()
			.sort({ createdAt: 1 })
			.populate('products.product');

		// Envia a lista de pedidos como resposta em formato JSON
		res.json(orders);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
