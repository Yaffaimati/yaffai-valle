
import { useEffect,useState } from "react";
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import {db} from "../firebase"
import {collection, getDocs} from "firebase/firestore"


const ItemDetailContainer = () => { 
    
    const [listProductos, setListProductos] = useState ({})
    const [loading, setLoading] = useState(false)
     const { id } = useParams()

    useEffect (() => {
        
       const productosCollection = collection (db, "productos")
       const consulta = getDocs(productosCollection)
       consulta 
            .then(snapshot => {
                const product = snapshot.docs.map(doc =>
                    {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    })
                    setListProductos(product.find(item => item.id === id))
                    setLoading(true)
            })       
      
    }, [id])

    return (
        <>
        {!loading && <span>Loading...</span>}
        {loading && <ItemDetail listProductos={listProductos}/>}
        
        
        </>
    )
}

export default ItemDetailContainer