import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import {db} from "../firebase"
import {collection, getDoc, doc} from "firebase/firestore"


const ItemDetailContainer = () => { 
    
    const [product, setProduct] = useState ({});
     const { id } = useParams();

    useEffect (() => {
        
       const productosCollection = collection (db, "productos")
       const referencia = doc(productosCollection,id)
       const consulta = getDoc(referencia)
       
       consulta 
       .then((res)=>{
        setProduct(res.data())
       })
       .catch((err) => {
        console.log(err)
       })
    },[id])

    return (
        <>
        <ItemDetail product={product}/>
        
        </>
    )
}

export default ItemDetailContainer