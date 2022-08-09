import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => { 
    
    return (
        <>
        <h2>{greeting}</h2>
        <ItemCount onAdd={() => {}} initial={1} stock={5}/>
        </>
    )
}


export default ItemListContainer