import React, { useState } from 'react';
import Axios from 'axios';
import { orderUrl, url } from '../../utils/urls';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormControl, Select, InputLabel, MenuItem, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';


const SetOrder = () => {

    let [orders, setOrders] = useState([]);

    useEffect(() => {
        callOrders();
    }, [])

    const callOrders = () => {
        Axios.get(url + orderUrl).then(res => {
            console.log(res.data.data);
            setOrders(res.data.data);
        })
    }


    return (
        <>
            <List>
                {
                    orders.map(order => (

                        <ListItem>
                            <span><b>Order ID :</b>{order._id}</span>
                            <span><b>Products Bought :</b>{order.products.length}</span>
                            <Link to={`/orderProducts/${order._id}`}><Button variant="contained" color="primary">View Products</Button></Link>
                        </ListItem>

                    ))
                }
            </List>
        </>
    )
}

export default SetOrder;