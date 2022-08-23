import  {customFetch}   from './customFetch'
import {useState, useEffect} from 'react'
import { products } from "./productos"
import ItemList from "./ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => { 
    const [listProducts, setListProducts] = useState ([])
    const[loading,setLoading] = useState (false)
    const {id} = useParams ()

    useEffect (() => {
        customFetch(products)
        .then(data =>{
            setLoading(true)
            if(id){
                 setListProducts(data.filter(item=>item.category===id))
            } else {
                setListProducts(data)
            }
        } )
    },[id] )

    return (
        <>
        <h2>{greeting}</h2>
        {loading && <ItemList listProducts={listProducts} />}
        </>
    )
}


export default ItemListContainer