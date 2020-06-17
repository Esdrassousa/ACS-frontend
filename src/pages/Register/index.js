import React, { useState } from 'react'
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import axios from 'axios'


import './styles.css'



export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegiste(e) {
        e.preventDefault();

        
        const data = {
            nome,
            email,
            senha,
        };
        

        try{

        const response = await api.post('user', data)
            
            alert(`cadastrado`)
            history.push('/');
            
        }catch(e){
            alert(data.message)
        }
        
    }

    return (

        <div className="register-container">

            <section className="form">

                <form onSubmit={handleRegiste}>
                    <h1>Cadastre-se</h1>
                    <input
                        placeholder="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />

                    <input type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />


                    <input
                        placeholder="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" ></FiArrowLeft>
                        Voltar
                    </Link>


                </form>
            </section>
        </div>
    )
}