import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PlaceOrder from './placeOrder';
import { productUrl, url } from '../../utils/urls';


const Order = () => {

    let [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    let getProducts = () => {
        Axios.get(url + productUrl).then(res => {
            setProducts(res.data.data)
        })
    }

    return (
        <>

            {/* {
                // console.log(products)
                products.map(product => (
                    <div key={product.productId}>

                        <span>{product.productName}</span>
                        <span>{product.productQty}</span>
                    </div>


                ))
            } */}
            <PlaceOrder DBproducts={products} />
        </>

    )
}

export default Order;