import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { productUrl, url } from '../../utils/urls';


const UpdatePage = (props) => {

    let { id } = props.match.params

    let [product, setProduct] = useState([]);


    //FORM SUBMIT FUNCTION
    const { register, handleSubmit } = useForm();

    let onSubmit = async (data) => {

        data.productQty = Number(product.productQty) + Number(data.productQty)

        await Axios.post(url + productUrl + id, data).then(res => {
            setProduct(res.data.data);
        })
    }

    //GETTING REQUIRED PRODUCT START BEFORE UPDATE

    useEffect(() => {
        getProduct();
    }, [])

    let getProduct = () => {
        Axios.get(url + productUrl + id).then(res => {
            setProduct(res.data[0]);
        })
    }
    //GETTING REQUIRED PRODUCT END BEFORE UPDATE

    return (
        <>

            <p><b>Product ID</b> : {product.productId}</p>
            <p><b>Product Name</b> : {product.productName}</p>
            <p><b>Product Quantity</b> : {product.productQty}</p>
            <p><b>Product Price</b> : {product.unitPrice}</p>


            <form onSubmit={handleSubmit(onSubmit)} >
                <>
                    <input name="productId" type="hidden" value={product.productId} ref={register} />
                    <input name="productName" type="hidden" value={product.productName} ref={register} />
                    <input name="unitPrice" type="hidden" value={product.unitPrice} ref={register} />
                </>
                <label>Product Quantity</label>
                <input name="productQty" type="text" ref={register} />
                <button type="submit">Update</button>
            </form>
            <Link to={`/`}><button>Go Back</button></Link>

        </>
    )
}


export default UpdatePage;