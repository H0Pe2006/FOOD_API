import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Função assíncrona para criar um novo produto
export async function createProduct(req: Request, res: Response) {
	try {
		// Extrai o caminho da imagem do corpo da solicitação (caso exista)
		const imagePath = req.file?.filename; 

		// Extrai informações do produto do corpo da solicitação, como 'name', 'description', 'price', 'category' e 'ingredients'
		const { name, description, price, category, ingredients } = req.body;

		// Cria um novo produto no banco de dados usando o modelo 'Product'
		const product = await Product.create({ 
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients: ingredients ? JSON.parse(ingredients) : [],
		});

		// Envia uma resposta de sucesso com o código de status 201 (Created) e o novo produto como JSON
		res.status(201).json(product);
	} catch (error) {
		// Em caso de erro, registra o erro no console
		console.log(error);

		// Envia uma resposta de erro com o código de status 500 (Internal Server Error)
		res.sendStatus(500);
	}
}
