
import logo from '../../assets/logo.png'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'

import {AuthContext} from '../../context/auth'


export default function SignUp(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPasswotd] = useState('')


    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt='Logo da Aplicação'/>
                </div>

                <form action="">
                    <h1>Registro</h1>

                    <input type="text" placeholder='Digite seu Nome' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input type="text" placeholder='Digite seu Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder='Digite seu Email' 
                    value={password}
                    onChange={(e) => setPasswotd(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>

                </form>
                    <Link to="/">Fazer Login</Link>
            

            </div>
        </div>
    )
}