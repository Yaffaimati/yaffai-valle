import  {customFetch}   from './customFetch'
import {useState, useEffect} from 'react'
import { products } from "./productos"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { db } from "././firebase"
import { collection, getDoc, getDocs } from "firebase/firestore"



const ItemListContainer = ({greeting}) => { 
    const [listProducts, setListProducts] = useState ([])
    const[loading,setLoading] = useState (false)
    const {id} = useParams ()

    useEffect (() => {

     const productosCollection = collection(db, "productos")
        
     const consulta = getDocs (productosCollection)

     consulta
     .then(snapshot=>{
        
        const listProducts = snapshot.docs.map(doc=>{
            
           return{
            ...doc.data(),
            id: doc.id
        }
        })
        setListProducts(listProducts)
        setLoading(false)
     })
     .catch(err=>{
        console.log(err)
     })
    },[id])  

    return (
        <>
        <h2>{greeting}</h2>
        { loading && <ItemList listProducts={listProducts} />}
        </>
    )
}


export default ItemListContainer