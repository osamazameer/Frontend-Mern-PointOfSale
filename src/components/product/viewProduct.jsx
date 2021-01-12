import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { productUrl, url } from '../../utils/urls';
import DeleteProduct from './deleteProduct'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';


const ViewProduct = (props) => {

    let { id } = props.match.params

    let [specificProduct, setSpecificProduct] = useState([]);
    useEffect(() => {
        getSpecificProduct();
    }, [])


    let getSpecificProduct = () => {

        let data = Axios.get(url + productUrl + id).then(res => {
            console.log(res.data[0]);
            setSpecificProduct(res.data[0]);
        })
        data.then(res => { })
    }



    return (
        <>
            <Link to={`/`}>Go Back</Link>

            <h2>{specificProduct.productName}</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{specificProduct.productId}</td>
                        <td>{specificProduct.productName}</td>
                        <td>{specificProduct.unitPrice}</td>
                        <td>{specificProduct.productQty}</td>
                        <td><DeleteProduct id={specificProduct.productId} /></td>
                    </tr>

                </tbody>
            </table>


        </>
    )
}

export default ViewProduct;