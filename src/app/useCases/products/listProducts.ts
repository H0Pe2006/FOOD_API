import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Função assíncrona para listar todos os produtos
export async function listProducts(req: Request, res: Response) {
	try {
		// Consulta todos os produtos no banco de dados
		// - Usa o método 'find()' para buscar todos os documentos na coleção 'Product'
		const products = await Product.find();

		// Envia a lista de produtos como resposta em formato JSON
		res.json(products);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
