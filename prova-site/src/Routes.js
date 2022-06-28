import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cadastrar from './Cadastrar'
import Listar from './Listar'

export default function Index() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cadastrar' element={<Cadastrar/>}/>
        <Route path='/Listar' element={<Listar/>}/>
        </Routes>
        </BrowserRouter>
    )
}