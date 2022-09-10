
import {useState, useEffect} from 'react'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { db } from "../firebase"
import { collection, getDocs , query, where } from "firebase/firestore"



const ItemListContainer = () => { 
    const [productos, setProductos] = useState ([])
    const[loading,setLoading] = useState (true)
    const {id} = useParams ()

    useEffect (() => {
   
        
   
        if (!id){ 
          const productosCollection = collection(db, "productos") 
          const consulta = getDocs (productosCollection)

     consulta
     .then(snapshot=>{
        
        const productos = snapshot.docs.map(doc=>{
            
           return{
            ...doc.data(),
            id: doc.id
        }
        })
        setProductos(productos)
        setLoading(false)
     })
     .catch(err=>{
        console.log(err)
     })
    }else{
        const productosCollection = collection(db, "productos") 
         const filtro = query(productosCollection, where)
        const consulta = getDocs (filtro)
   
        consulta
        .then(snapshot=>{
           
           const productos = snapshot.docs.map(doc=>{
               
              return{
               ...doc.data(),
               id: doc.id
           }
           })
           setProductos(productos)
           setLoading(false)
        })
        .catch(err=>{
           console.log(err)
        })

    }
    },[id])  

    return (
        <>
        { loading && <ItemList productos={productos} />}
        </>
    )

}
    

    
    

export default ItemListContainer