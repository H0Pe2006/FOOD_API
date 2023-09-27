import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

// Cria uma instância do router Express
export const router = Router();

// Configura o multer para processar uploads de arquivos
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	}),
});

// Rotas para listagem e criação de categorias
router.get('/categories', listCategories);
router.post('/categories', createCategory);

// Rotas para listagem de produtos
router.get('/products', listProducts);

// Rota para criação de produtos com upload de imagem
router.post('/products', upload.single('image'), createProduct);

// Rota para listagem de produtos por categoria
router.get('/categories/:categoryId/products', listProductsByCategory);

// Rotas para listagem de pedidos
router.get('/orders', listOrders);

// Rota para criação de pedidos
router.post('/orders', createOrder);

// Rota para atualização do status de um pedido
router.patch('/orders/:orderId', changeOrderStatus);

// Rota para cancelamento de um pedido
router.delete('/orders/:orderId', cancelOrder);
