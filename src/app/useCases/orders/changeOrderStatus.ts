import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Função assíncrona para alterar o status de um pedido
export async function changeOrderStatus(req: Request, res: Response) {
	try {
		// Extrai o 'orderId' dos parâmetros da solicitação
		const { orderId } = req.params;
	
		// Extrai o novo 'status' do corpo da solicitação
		const { status } = req.body;

		// Verifica se o novo status é válido
		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			// Se não for válido, retorna uma resposta de erro com o código de status 400 (Bad Request)
			return res.status(400).json({
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		
		// Atualiza o status do pedido no banco de dados
		await Order.findByIdAndUpdate(orderId, { status });
	
		// Envia uma resposta de sucesso com o código de status 204 (No Content)
		res.sendStatus(204);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
