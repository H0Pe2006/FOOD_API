import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Função assíncrona para criar uma categoria
export async function createCategory(req: Request, res: Response) {
	try {
		// Extrai as propriedades 'icon' e 'name' do corpo da requisição
		const { icon, name } = req.body;

		// Cria uma nova categoria usando o método 'create' do modelo 'Category'
		const category = await Category.create({ icon, name });

		// Retorna o status HTTP 201 (Created) com a categoria criada em formato JSON
		res.status(201).json(category);
	} catch (error) {
		// Em caso de erro, o log é exibido no console
		console.log(error);
		// Retorna o status HTTP 500 (Internal Server Error)
		res.sendStatus(500);
	}
}