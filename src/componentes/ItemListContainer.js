
import {useState, useEffect} from 'react'
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'
import { db } from "../firebase"
import { collection, getDocs , query, where } from "firebase/firestore"



const ItemListContainer = ({greeting}) => { 
    const [productos, setProductos] = useState ([])
    const[loading, setLoading] = useState (true)
    const {category} = useParams ()

    useEffect (() => {
   
        
   
        
          const productosCollection = collection (db, "productos") 
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
     
     if (category === "Localidades") {
        const q = query(collection(db, "productos"), where("category", "==", "Localidades"));
        getDocs(q).then((snapshot) => { setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() }))) }) 
     }
     if (category === "Hospedajes") {
      const q = query(collection(db, "productos"), where("category", "==", "Hospedajes"));
      getDocs(q).then((snapshot) => { setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() }))) }) 
   }
   if (category === "Excursiones") {
      const q = query(collection(db, "productos"), where("category", "==", "Excursiones"));
      getDocs(q).then((snapshot) => { setProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data() }))) }) 
   }
}, [category])


if (loading) {
   return (
      <>
      <h2>{greeting}</h2>
      </>)
} else {
   return (
        <>
        <ItemList productos={productos} />
        </>

   )
}

}




    

    
    

export default ItemListContainer
