import logo from '../../assets/logo.png'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Signing.css'

import {AuthContext} from '../../context/auth'

export default function SignIn(){

    


    const [email, setEmail] = useState('')
    const [password, setPasswotd] = useState('')

    const {SignIn} = useContext(AuthContext)

    function handleLogin(e){
        e.preventDefault();

        if(email !=='' && password !==''){

            SignIn(email, password);

        }

    }


    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt='Logo da Aplicação'/>
                </div>

                <form onSubmit={handleLogin}>

                    <h1>Login</h1>
                    <input type="text" placeholder='Digite seu Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password" placeholder='Digite seu Email' 
                    value={password}
                    onChange={(e) => setPasswotd(e.target.value)}
                    />

                    <button type="submit">Acessar</button>

                </form>
                    <Link to="/register">Criar uma conta</Link>
            

            </div>
        </div>
    )
}