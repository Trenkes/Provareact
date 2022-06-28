import axios from 'axios'

const api = axios.create({
  baseURL:('http://localhost:5000')
})

export async  function CadastrarAnime (nome){
  const r = await api.post('/inserir', {
    nome:nome
  })
  return r.data
}

export async function Listar (){
  const r = await api.get('/todosanimes')
  return r.data
}