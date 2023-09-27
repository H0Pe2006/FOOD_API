import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Função assíncrona para listar produtos de uma categoria específica
export async function listProductsByCategory(req: Request, res: Response) {
	try {
		// Extrai o parâmetro 'categoryId' da requisição
		const { categoryId } = req.params;

		// Obtém todos os produtos onde o campo 'category' é igual a 'categoryId'
		const products = await Product.find().where('category').equals(categoryId);

		// Retorna os produtos em formato JSON
		res.json(products);
	} catch (error) {
		// Em caso de erro, o log é exibido no console
		console.log(error);
		// Retorna o status HTTP 500 (Internal Server Error)
		res.sendStatus(500);
	}
}