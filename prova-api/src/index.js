import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import animeController from '../src/controller/animeController.js'

const server = express();
server.use(cors());
server.use(express.json())

server.use(animeController)

server.listen(process.env.PORT, () => console.log(`API online na Porta ${process.env.PORT}`))