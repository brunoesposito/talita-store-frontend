import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import Brand from '../../components/Brand';
import api from "../../../services/api";
import { login } from "../../../services/auth";

import { Form, Container } from "../styles/style";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let history = useHistory();

    const handleSignIn = async e => {
        e.preventDefault();
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/sessions", { email, password });
                login(response.data.token.token, response.data.user.is_admin, response.data.user.name, response.data.user.email);
                history.push('/app');
            } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais. T.T");
            }
        }
    };

    return (
        <Container>
            <Brand />
            <Form onSubmit={handleSignIn}>
                {error && <p>{error}</p>}
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
                <Button variant="contained" type="submit">Entrar</Button>
                <hr />
                <Link to="/register">Criar conta grátis</Link>
            </Form>
        </Container>
    );
}

export default SignIn;