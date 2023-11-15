import React from 'react';
import ProductComponent from './ProductComponent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setProducts } from '../redux/actions/productActions';
import axios from 'axios'

function ProductListing(props) {
    const products =useSelector(state =>state)
    const dispatch =useDispatch()

    // const fetchProducts = async()=>{
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     dispatch(setProducts(response.data))
    // }

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    console.log(products);

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;