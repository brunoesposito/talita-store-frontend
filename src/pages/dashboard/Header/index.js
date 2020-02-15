import React from 'react';
import { useHistory } from "react-router-dom";

import Brand from '../../components/Brand';
import { logout } from '../../../services/auth';

import { BoxHeader } from "./styles";

function Header() {
    let history = useHistory();

    const name = localStorage.getItem('@talita-Name');
    const handleLogout = e => {
        e.preventDefault();
        logout();
        history.push('/');
    };

    return (
        <BoxHeader>
            <Brand />
            <span>Olá {name}, <button onClick={handleLogout}>Sair</button></span>
        </BoxHeader>
    );
}

export default Header;