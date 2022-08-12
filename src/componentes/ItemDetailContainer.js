import { useEffect,useState } from "react";
import {products} from "./productos"
import {customFetch} from './customFetch'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = ({}) => { 
    const [listProducts, setListProducts] = useState ({})
    
    useEffect (() => {
        customFetch(products)
        .then(data => setListProducts(data))
    },)

    return (
        <>
        <itemDetail/>
        
        </>
    )
}

export default ItemDetailContainer