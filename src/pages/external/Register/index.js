import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

import Brand from '../../components/Brand';
import api from '../../../services/api';

import { Form, Container } from "../styles/style";

function Register() {
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async e => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Preencha todos os dados para se cadastrar");
        } else {
            try {
                const response = await api.post("/users", { name, email, password });
                
                if( response.data.message === 'Email já existe' ) {
                    setError("Email já existe");    
                    return;
                }

                history.push("/");
            } catch (err) {
                setError("Ocorreu um erro ao registrar sua conta. T.T");
            }
        }
    };

    return (
    <Container>
        <Brand />
        <Form onSubmit={handleSignUp}>
            {error && <p>{error}</p>}
            <input
                type="text"
                placeholder="Nome de usuário"
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit">Cadastrar grátis</Button>
            <hr />
            <Link to="/">Fazer login</Link>
        </Form>
    </Container>
    );
}

export default Register;