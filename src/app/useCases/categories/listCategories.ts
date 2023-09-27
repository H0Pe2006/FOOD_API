import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Função assíncrona para listar categorias
export async function listCategories(req: Request, res: Response) {
	try {
		// Obtém todas as categorias usando o método 'find' do modelo 'Category'
		const categories = await Category.find();

		// Retorna as categorias em formato JSON
		res.json(categories);
	} catch (error) {
		// Em caso de erro, o log é exibido no console
		console.log(error);
		// Retorna o status HTTP 500 (Internal Server Error)
		res.sendStatus(500);
	}
}