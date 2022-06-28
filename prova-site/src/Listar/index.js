import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Listar } from '../api/anime'
import './index.scss'

export default function Index() {
    const[Anime,SetAnime] = useState([]);
    const Navigate = useNavigate();

    async function ListarAnime (){
        const r = await Listar();
        SetAnime(r)
    }

    useEffect(() =>{ 
        ListarAnime()
    } )

    function Voltar(){
        Navigate('/')
    }

    return(

        <main className="Pai">
            <header> <h1>  Listar Anime </h1></header>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Nome </th>
                        </tr>

                    </thead>

                    <tbody>
                        {Anime.map(item =>
                        <tr> 
                            <td> {item.id} </td>
                            <td> {item.nome} </td>
                        </tr>
                        )}

                    </tbody>
                </table>
                <div>
                    <button onClick={Voltar}> Home </button>
                </div>
            </section>
        </main>
    )
}