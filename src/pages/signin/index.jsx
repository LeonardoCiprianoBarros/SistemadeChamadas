import logo from '../../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signing.css'

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPasswotd] = useState('')


    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt='Logo da Aplicação'/>
                </div>

                <form action="">
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