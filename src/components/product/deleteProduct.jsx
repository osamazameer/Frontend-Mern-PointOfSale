import Axios from 'axios';
import React from 'react';

const DeleteProduct = (props) => {

    const deleteProduct = (id) => {
        Axios.delete(`http://localhost:8000/product/${id}`).then(res => {
            console.log(res);
        })
    }
    return (

        <>
            <button onClick={() => deleteProduct(props.id)}>
                Remove
            </button>
        </>
    )
}

export default DeleteProduct;