import { useNavigate } from 'react-router-dom'
import'./index.scss';


export default function Index() {
    const navigate = useNavigate();

    function Cadastrar(){
        navigate('/Cadastrar')
    }
    function Listar(){
        navigate('/Listar')
    }
    return(
        <main>
            <header>
                <h1> Animes </h1>
            </header>

            <section>
                <div>
                    <button onClick={Cadastrar}> Cadastrar </button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={Listar}> Listar </button>
                </div>
            </section>
        </main>
    )
}