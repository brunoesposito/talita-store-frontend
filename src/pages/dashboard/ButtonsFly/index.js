import React, { useState, useEffect, memo } from 'react';
import { Modal, Backdrop, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Fab } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import api from '../../../services/api';

import { ButtonModal, BoxModal } from './style';

function ButtonsFly(props) {
    const [edit, setEdit] = useState(false);
    const [saller, setSeller] = useState(false);

    const [name, setName] = useState('');
    const [imagem, setImagem] = useState('');
    const [price, setPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');
    const [error, setError] = useState('');
    
    const [sallerName, setSallerName] = useState('');
    const [sallerPrice, setSallerPrice] = useState('');
    const [sallerReceived, setSallerReceived] = useState('');
    const [sallerChange, setSallerChange] = useState('0,00');
    const [sallerType, setSallerType] = useState('');

    const [listSaller, setListSaller] = useState([]);

    const createProduct = async e => {
        e.preventDefault();
        if (!name || !imagem || !price) {
            setError("Preencha todos os campos!");
        } else {
            try {
                await api.post("/products", { name, imagem, price, offerPrice });
                setEdit(false);
            } catch (err) {
                setError("Algo de errado aconteceu!");
            }
        }
    };

    const createSeller = async e => {
        e.preventDefault();
        if (!sallerName || !sallerPrice || !sallerReceived || !sallerType) {
            setError("Preencha todos os campos!");
        } else {
            try {
                await api.post("/sales", { 
                    product_name: sallerName, 
                    product_price: sallerPrice, 
                    received: sallerReceived, 
                    change_money: sallerChange, 
                    type: sallerType 
                });
            } catch (err) {
                setError("Algo de errado aconteceu!");
            }
        }
    };

    const getSaller = async () => {
        const { data } = await api.get("/sales");

        if( data.length ){
            setListSaller(data)
        }
    }

    useEffect(() => {
        if( sallerReceived.length && sallerPrice.length ){
            var changeMoney = parseFloat(sallerReceived.replace(',', '.')) - parseFloat(sallerPrice.replace(',', '.'));
            setSallerChange(changeMoney.toFixed(2).replace('.', ','));
        }
        getSaller();
    }, [listSaller, sallerReceived, sallerPrice])

    return (
        <>
            <ButtonModal>
                <Fab aria-label="register" className="actions_icon" onClick={() => setEdit(true)}>
                    <AddIcon />
                </Fab>
                <Fab aria-label="saller" className="actions_icon saller" onClick={() => setSeller(true)}>
                    <AttachMoneyIcon />
                </Fab>
            </ButtonModal>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={edit}
                onClose={() => setEdit(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <BoxModal>
                    <form onSubmit={createProduct}>
                        {error && <p>{error}</p>}
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="URL da imagem do produto"
                            onChange={e => setImagem(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            onChange={e => setPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Preço promocional (opcional)"
                            onChange={e => setOfferPrice(e.target.value)}
                        />
                        <Button variant="contained" type="submit">Cadastrar produto</Button>
                    </form>
                </BoxModal>
            </Modal>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={saller}
                onClose={() => setSeller(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <BoxModal setWidth="1200px">
                    <p>Troco: R${sallerChange}</p>
                    <form onSubmit={createSeller}>
                        {error && <p>{error}</p>}
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            onChange={e => setSallerName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Preço do produto"
                            onChange={e => setSallerPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Quanto recebeu?"
                            onChange={e => setSallerReceived(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Qual a forma de pagamento?"
                            onChange={e => setSallerType(e.target.value)}
                        />
                        <Button variant="contained" type="submit">Lançar venda</Button>
                    </form>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID da venda</TableCell>
                                    <TableCell align="center">Nome do produto</TableCell>
                                    <TableCell align="center">Preço do produto</TableCell>
                                    <TableCell align="center">Valor recebido</TableCell>
                                    <TableCell align="center">Troco</TableCell>
                                    <TableCell align="center">Forma de pagamento</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listSaller.map((saller, key) => (
                                    <TableRow key={key}>
                                        <TableCell component="th" scope="row">{saller.id}</TableCell>
                                        <TableCell align="center">{saller.product_name}</TableCell>
                                        <TableCell align="center">R${saller.product_price}</TableCell>
                                        <TableCell align="center">R${saller.received}</TableCell>
                                        <TableCell align="center">R${saller.change_money}</TableCell>
                                        <TableCell align="center">{saller.type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </BoxModal>
            </Modal>
        </>
    );
}

export default memo(ButtonsFly);