import React from "react";
import { Container } from '@material-ui/core';

import ProductList from './Product/';
import Header from './Header/'; 
import ButtonsFly from './ButtonsFly/'; 

function Dashboard() {
    const admin = localStorage.getItem('@talita-IsAdmin');

    return (
        <Container>
            <Header />
            <ProductList />
            {admin === '1' || admin === 1 ? (<ButtonsFly />) : null}
        </Container>
    );
}

export default Dashboard;