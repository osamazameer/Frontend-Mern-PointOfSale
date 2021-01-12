import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';
import Axios from 'axios';
import { orderUrl, url } from '../../utils/urls';
import { Link } from 'react-router-dom';


const PlaceOrder = ({ DBproducts }) => {


    let [order, setOrder] = useState({});
    let [product, setProduct] = useState([]);
    let [checkoutData, setCheckoutData] = useState([]);
    let [products, setProducts] = useState([]);
    let [productQty, setProductQty] = useState('');
    let [Bill, setBill] = useState(0);
    let [checkoutID, setCheckoutID] = useState('');


    // Adding Products array in State Order
    useEffect(() => {
        setOrder(
            { products, Bill }
        )

    }, [products])


    // Submit Button Handle Adding Product Object in Products Array 
    let handleSubmit = (e) => {
        e.preventDefault();
        let QtyPrice = Number(product.unitPrice) * Number(productQty);
        setBill(Number(QtyPrice) + Number(Bill));
        setProducts(prev => [
            ...prev,
            {
                _id: product._id,
                productName: product.productName,
                unitPrice: product.unitPrice,
                QtyPrice: QtyPrice,
                Qty: productQty,
            }
        ])

    }


    //Sending(saving) Order to DataBase
    const placeOrder = () => {
        console.log(order)
        Axios.post(url + orderUrl, order).then(res => {
            console.log(res.data._id);
            setCheckoutID(res.data._id);
        })
    }


    return (
        <>
            <p>Bill : {Bill}</p>

            <form onSubmit={handleSubmit} >
                <Select name="productName" onChange={e => setProduct(e.target.value)}>
                    {
                        // console.log(products)
                        DBproducts.map(product => (
                            <MenuItem key={product.productId} value={product}>{product.productName}</MenuItem>
                        ))
                    }
                </Select>
                <input type="text" name="productQty" value={productQty} onChange={e => setProductQty(e.target.value)} />
                <Button type="submit" variant="contained" color="primary" >ADD</Button>
            </form>

            <div>
                {
                    products.map(productz => (
                        <div>
                            <p>Product : {productz.productName}   </p>
                            <p>Price : {productz.unitPrice}</p>
                            <p>Quantity : {productz.Qty}</p>
                            <p>Total Price of Product : {productz.QtyPrice}</p>
                            <hr />

                        </div>

                        // console.log(productz)
                    ))
                }
            </div>
            <Button onClick={placeOrder} variant="contained" color="primary" >Set Order</Button>

            <Link to={`/setOrder/`}><Button variant="contained" color="primary">See Orders</Button></Link>
            <Link to={`/orderProducts/${checkoutID}`}><Button variant="contained" color="primary">Checkout</Button></Link>
        </>
    )
}

export default PlaceOrder;