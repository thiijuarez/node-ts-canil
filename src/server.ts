import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';


//variaveis de ambiente
dotenv.config();
//o proprio servidor
const server = express();

//primeira coisa a se configurar é nosso template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//agora vamos configurar a pasta publica
server.use(express.static(path.join(__dirname, '../public')));

//agora onde configuramos nossas rotas
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('pagina não encontrada');
});

//por ultimo colocamos o servidor para rodar
server.listen(process.env.PORT);