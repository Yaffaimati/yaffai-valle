import { useEffect,useState } from "react";
import {traerProducto,products} from "./productos"
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'



const ItemDetailContainer = () => { 
    const [product, setProduct] = useState ({});
     const { id } = useParams();

    useEffect (() => {
        
        traerProducto(products)
        
        .then(data => {
            setProduct(data.find(item=>item.id===id))
        })
        
    },[id])

    return (
        <>
        <ItemDetail product={product}/>
        
        </>
    )
}

export default ItemDetailContainer