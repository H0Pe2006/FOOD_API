import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Função assíncrona para cancelar um pedido
export async function cancelOrder(req: Request, res: Response) {
	try {
		// Extrai o 'orderId' dos parâmetros da solicitação
		const { orderId } = req.params;

		// Procura e exclui o pedido com o ID especificado
		await Order.findByIdAndDelete(orderId);

		// Envia uma resposta de sucesso com o código de status 204 (No Content)
		res.sendStatus(204);

	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
