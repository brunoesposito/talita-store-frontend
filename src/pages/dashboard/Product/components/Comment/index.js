import React, { useState, useEffect, useCallback } from 'react';

import api from '../../../../../services/api';

import DeleteIcon from '@material-ui/icons/Delete';
import { BoxComment, RegisterComment } from './styles';

function Comment({ id }) {
    const [comment, setComment] = useState('');
    const [commentId, setCommentId] = useState('');
    const [allComment, setAllComment] = useState('');
    const [registerComment, setRegisterComment] = useState('');
    const admin = localStorage.getItem('@talita-IsAdmin');

    const getAndSetComment = async () => {
        await api.post(`/comment/${id}`, { comment: registerComment });
        setComment(registerComment);
    };

    const removeComment = async (e) => {
        e.preventDefault();
        await api.delete(`/comment/${commentId}`);
        setComment('');
    };

    const getComment = useCallback(async() => {
        const { data } = await api.get(`/comment/${id}`);
        
        if( data.length ){
            setCommentId(data[0].id)
            setComment(data[0].comment)
        }
    }, [id]);

    const getAllComment = useCallback(async() => {
        const { data } = await api.get(`/comment/all/${id}`);
        
        if( data.length ){
            setAllComment(data)
        }
    }, [id]);

    useEffect(() => {
        if(admin === 1 || admin === '1'){
            getAllComment();
        }
        getComment();
    }, [comment, getComment, getAllComment, admin, commentId]);

    return (
        <BoxComment className="comment">
            {admin === 1 || admin === '1' ? (
                allComment && <small>Comentário dos clientes:</small>
            ) : comment ? (
                <RegisterComment>
                    <p>{comment}</p>
                    <button onClick={removeComment}><DeleteIcon /></button>
                </RegisterComment>
            ) : (
                <>
                    <textarea placeholder="Escreva aqui seu comentário" onChange={e => setRegisterComment(e.target.value)}></textarea>
                    <button className="sendComment" onClick={getAndSetComment}>Enviar</button>
                </>
            )}
            {allComment ? (
                allComment.map((value, key) => (
                    <>
                        <p key={key}>{key+1} - {value.comment}</p>
                    </>
                ))
            ) : (
                admin === 1 || admin === '1' ? <p className="empty_comment">Sem comentários</p> : null
            )}
        </BoxComment>
    );
}

export default Comment;