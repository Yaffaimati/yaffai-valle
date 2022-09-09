
import {useState, useEffect} from 'react'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { db } from "../firebase"
import { collection, getDocs , query, where } from "firebase/firestore"



const ItemListContainer = () => { 
    const [listProducts, setListProducts] = useState ([])
    const[loading,setLoading] = useState (true)
    const {id} = useParams ()

    useEffect (() => {

     const productosCollection = collection(db, "productos")
     
     const filtro = query(productosCollection, where("category","==",id))

     const consulta = getDocs (filtro)

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
    },[])  

    return (
        <>
        { loading && <ItemList listProducts={listProducts} />}
        </>
    )

}
    

    
    

export default ItemListContainer