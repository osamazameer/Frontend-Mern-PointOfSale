import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { productUrl, url } from '../../utils/urls';
import DeleteProduct from './deleteProduct'
//import UpdatePage from './updatePage';
import { Link } from 'react-router-dom';

const ShowProducts = () => {


    let [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])


    let getProducts = () => {

        Axios.get(url + productUrl).then(res => {
            setProducts(res.data.data);
            console.log(res.data.data)
        })
    }



    return (
        <>
            <div className="center">
                <h2>This Product</h2>
                <Link to={`/addProduct`}><button>Add Product</button></Link>
                <Link to={`/order`}><button>Place Order</button></Link>

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
                        {products.map(product => (
                            <tr key={product.productId}>
                                <td>{product.productId}</td>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.productQty}</td>
                                <td>
                                    <DeleteProduct id={product.productId} />
                                    <Link to={`/updatePage/${product.productId}`}><button>Add Stock</button></Link>
                                    <Link to={`/viewProduct/${product.productId}`}><button>View Product</button></Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default ShowProducts;