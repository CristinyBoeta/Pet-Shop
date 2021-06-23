import http from '../../http'
import { useState } from 'react'
import '../Login/Form.css'
const Login = () => {

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const efetuarLogin = (evento) =>{
        evento.preventDefault()
        const usuario ={
            email: email,
            senha: senha
        }
        http.post('auth/login', usuario)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
        })
        .catch(erro => {
            console.log('Algo deu errado');
            console.log(erro);
        })
    }

    const manipuladorDeEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorDeSenha = (evento) =>{
        setSenha(evento.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={efetuarLogin}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={manipuladorDeEmail} required></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" value={senha} onChange={manipuladorDeSenha} required></input>
                </div>
                <button>Entrar</button>
            </form>
        </div>

    )
}

export default Login;