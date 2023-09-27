import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Função assíncrona para criar um novo pedido
export async function createOrder(req: Request, res: Response) {
	try {
		// Extrai informações da solicitação, como 'table' e 'products', do corpo da requisição
		const { table, products } = req.body;

		// Cria um novo pedido no banco de dados usando o modelo 'Order'
		const order = await Order.create({ table, products });
		
		// Envia uma resposta de sucesso com o código de status 201 (Created) e o novo pedido como JSON
		res.status(201).json(order);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
