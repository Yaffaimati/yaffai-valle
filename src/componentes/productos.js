export const products = [{
    id: 1,
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0c/2c/26.jpg',
    product: "Rio",
    category: "Excursiones",
    description: "Rio del medio",
    price: 5000,
    stock: 56,
},
{
    id: 2,
    image: 'https://www.suteba.org.ar/images/85324_h(350).jpg',
    product: "La Cumbrecita",
    category: "Localidades",
    description: "Antiguo restaurante",
    price: 1500,
    stock: 80,
},
{
    id: 3,
    image: "https://srt-assets.tadevel.xyz/61de0285ab08836a3dc66f0d/720.webp",
    product: "Hotel",
    category: "Hospedajes",
    description: "Hotel antiguo",
    price: 10000,
    stock: 50,
},
{
    id: 4,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/10/02/32/8a/fachada-del-edificio.jpg",
    product: "Hostel",
    category: "Hospedajes",
    description: "Hostel para viajeros",
    price: 2000,
    stock: 30,
},
{
    id: 5,
    image: "https://ruturviajes.com.ar/wp-content/uploads/2017/09/5.jpg",
    product: "Champaqui",
    category: "Excursiones",
    description: "Subida al champaqui",
    price: 7000,
    stock: 12,
},
{
    id: 6,
    image: "https://www.montebarranco.com/public/images/sites/542-21888.jpg",
    product: "Villa Yacanto",
    category: "Localidades",
    description: "al pie del Cerro mas alto",
    price: 8000,
    stock: 18,
}
];

const producto = {
id: 6,
image: "https://www.montebarranco.com/public/images/sites/542-21888.jpg",
product: "Villa Yacanto",
category: "Localidades",
description: "al pie del Cerro mas alto",
price: 8000,
stock: 18,};

export const traerProducto = (products) => {
       return new Promise ((resolve,reject) =>{
        setTimeout (() => {
            resolve (products);
        },1000)
       } )
};