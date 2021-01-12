import { ListItem, ListItemText } from '@material-ui/core';
import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { orderUrl, url } from '../../utils/urls';

const ShowOrderProducts = (props) => {

    let { id } = props.match.params
    console.log(id);

    let [orderProducts, setOrderProducts] = useState([]);
    let [orderStuff, setOrderStuff] = useState([]);


    useEffect(() => {
        getOrderProducts();

    }, [])

    const getOrderProducts = () => {
        Axios.get(url + orderUrl + id).then(res => {
            console.log(res.data);
            setOrderProducts(res.data.products);
            setOrderStuff(res.data);

        })
    }

    return (
        <>
            <h1>Products</h1>
            {
                orderProducts.map(order => (
                    <ListItem>
                        <span><b>Product :</b></span><ListItemText primary={order.productName} />
                        <span><b>QTY :</b></span><ListItemText primary={order.Qty} />
                        <span><b>Price :</b></span><ListItemText primary={order.QtyPrice} />
                    </ListItem>

                ))
            }

            <p><b>Bill</b> : {orderStuff.bill}</p>

        </>
    )

}

export default ShowOrderProducts;

