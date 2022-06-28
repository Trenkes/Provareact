import { useState } from "react"
import { CadastrarAnime } from '../api/anime'
import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Index(){
    const[Nome, SetNome]=useState('');
    const Navigate = useNavigate()

    async function SalvarClick(){
        try {
            if(!Nome){
                alert("Preencha Corretamente")
            }
            else{
                const r = await CadastrarAnime(Nome)
                alert("Anime Cadastrado")
            }
            
        } 
        
        catch (err) {
            alert(err.message)
        }
    }

    function Voltar(){
        Navigate('/')
    }


    return (
        <main>
            <header> <h1> Cadastrar Anime </h1> </header>
            <section> <input placeholder="Nome" value={Nome} onChange={e => SetNome(e.target.value)}/>  &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={SalvarClick}> Cadastrar </button></section>
            <section> <button onClick={Voltar}> Home </button> </section>
        </main>
    )
}