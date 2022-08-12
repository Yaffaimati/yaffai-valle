
import  {customFetch}   from './customFetch'
import {useState, useEffect} from 'react'
import { products } from "./productos"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => { 
    const [listProducts, setListProducts] = useState ([])
    
    useEffect (() => {
        customFetch(products)
        .then(data => setListProducts(data))
    },[] )

    return (
        <>
        <h2>{greeting}</h2>
        <ItemList listProducts={listProducts} />
        </>
    )
}


export default ItemListContainer