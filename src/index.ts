import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		// Quando a conexão é bem-sucedida, cria uma instância do aplicativo Express
		const app = express();
		const port = 3000; // Porta em que o servidor vai escutar

		// Configura o servidor Express para servir arquivos estáticos da pasta 'uploads'
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		
		// Habilita o uso de JSON no corpo das solicitações
		app.use(express.json());
		
		// Adiciona as rotas definidas no módulo 'router' ao aplicativo
		app.use(router);

		// Inicia o servidor e escuta na porta especificada
		app.listen(port, () => {
			console.log(`🚗Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no MongoDB'));
