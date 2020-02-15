import React, { useState, useEffect, memo } from "react";
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import api from '../../../services/api';
import Actions from './components/Actions/';
import Comment from './components/Comment/';

import { Product } from "./style";

function ProductList() {
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        const { data } = await api.get("/products");
        setProduct(data)
    }

    useEffect(() => {
        getProduct();
    }, [product]);

    return (
        <Grid container spacing={3}>
            {product ? (
                product.map((value, key) => (
                    <Grid item xs={12} sm={4} key={key}>
                        <Product id={`product_${value.id}`}>
                            <div className="boxProduct">
                                <Actions id={value.id} />
                                {value.imagem ? (
                                    <img src={value.imagem} alt={value.name} />
                                ) : (
                                    <Skeleton variant="rect" width={'100%'} height={265} />
                                )}
                                {value.name ? (
                                    <p>{value.name}</p>
                                ) : (
                                    <Skeleton height={50} />
                                )}
                                {value.price ? (
                                    <div className="box_price">
                                    {value.offer_price ? (
                                        <>
                                        <span className="old_price">R${value.price}</span>
                                        <span>R${value.offer_price}</span>
                                        </>
                                    ) : (
                                        <span>R${value.price}</span>
                                    )}
                                    </div>
                                ) : (
                                    <Skeleton height={30} />
                                )}
                            </div>
                            <Comment id={value.id} />
                        </Product>
                    </Grid>
                ))
            ) : (
                <Grid item xs={12} sm={4}>
                    <div className="boxProduct">
                        <Skeleton variant="rect" width={'100%'} height={265} />
                        <Skeleton height={50} />
                        <Skeleton height={30} />
                    </div>
                </Grid>
            )}
        </Grid>
    )
}

export default memo(ProductList);