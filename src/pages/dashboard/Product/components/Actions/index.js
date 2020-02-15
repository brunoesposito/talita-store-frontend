import React, { useState, useEffect } from 'react';
import { Fab } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

import api from '../../../../../services/api';

import { BoxActions } from "./style";

function Actions({ id }) {
    const admin = localStorage.getItem('@talita-IsAdmin');
    const [like, setLike] = useState(false);

    const removeProduct = async e => {
        e.preventDefault();
        await api.delete(`/products/${id}`);
    };

    const getAndShowLike = async (id) => {
        const { data } = await api.get(`/like/${id}`);

        if( data.length ){
            if( data[0].is_like > 0 ){
                setLike(true)
                return;
            }

            setLike(false)
        }
    }

    const registerLike = async () => {
        setLike(!like)
        await api.post(`/like/${id}`, { is_like: !like });
    };

    useEffect(() => {
        getAndShowLike(id)
    }, [id])

    return (
        <BoxActions>
            {admin === 1 || admin === '1' ? (
                <Fab size="small" aria-label="remove" className="actions_icon" onClick={removeProduct}>
                    <DeleteIcon />
                </Fab>
            ) : (
                <Fab size="small" aria-label="like" className={like ? 'actions_icon like' : 'actions_icon deslike'} onClick={registerLike}>
                    <FavoriteIcon />
                </Fab>
            )}
        </BoxActions>
    );
}

export default Actions;