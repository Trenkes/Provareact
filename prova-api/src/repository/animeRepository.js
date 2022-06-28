import { con } from '../repository/connection.js'

export async function InserirAnime(Nome) {
    const comando = `
     insert into tb_anime (nm_anime)
      values(?);
     `
    const [resposta] = await con.query(comando, [Nome])
    Nome.id == resposta.insertId
    return resposta[0]
};

export async function ListarAnimes() {
    const comando = `select nm_anime nome, id_anime id from tb_anime`
    const [resposta] = await con.query(comando)
    return resposta
};