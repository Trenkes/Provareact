import { Router } from 'express'
import { InserirAnime, ListarAnimes } from '../repository/animeRepository.js';

const server = Router();

server.post('/inserir', async (req, resp) => {
    try {
        const { nome } = req.body;
        const resposta = await InserirAnime(nome);
        if (!nome) throw new Error("O nome é OBRIGATÓRIO")
        resp.status(200).send(
            resposta
        )

    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }
})

server.get('/todosanimes', async (req, resp) => {
    try {
        const resposta = await ListarAnimes();
        resp.status(200).send(
            resposta
        )
    } catch (err) {
        resp.status(400).send({
            Erro: err.message
        })
    }
})
export default server;