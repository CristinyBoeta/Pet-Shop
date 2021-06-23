import { useState } from 'react'
import '../Login/Form.css'
import http from '../../http';
const Cadastro = () =>{

    const [nome, setNome] =useState('')
    const [email, setEmail] =useState('')
    const [senha, setSenha] =useState('')

    const efetuarCadastro = (evento) =>{
        evento.preventDefault()
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        http.post('auth/register', usuario)
        .then(response => console.log(response.data))
        .catch(erro => {
            console.log('Algo deu errado')
            console.log(erro);
        })
    }

    const manipuladorNome = (evento) =>{
        setNome(evento.target.value)
    }

    const manipuladorEmail = (evento) =>{
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) =>{
        setSenha(evento.target.value)
    }

    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={efetuarCadastro}>
            <div>
                <label>Nome</label>
                <input value={nome} onChange={manipuladorNome} required></input>
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={manipuladorEmail}  required type="email"></input>
            </div>
            <div>
                <label>Senha</label>
                <input value={senha} onChange={manipuladorSenha} required type="password"></input>
            </div>
            <button>Salvar</button>
        </form>
        </div>
        
    )
}
export default Cadastro;