import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../services/api'
import {Card, Button} from 'react-bootstrap'
import '../styles/components/carousel.css'
import avatar from '../assets/avatar.png'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {MdFavoriteBorder} from 'react-icons/md'


interface Item{
    id_product: number,
    name_product: string,
    price: number,
    description: string
    pquantity: number,
    mquantity: number,
    gquantity: number,
    ggquantity: number,
    photo: string,
    id_store:number,
    image_url: string
}

interface Store{
    id_store: number,
    name_store: string,
    thumb:string,
    image_url: string
}

function Carousel(){

    const [product, setProduct] = useState<Item[]>([])
    const [store, setStore] = useState<Store[]>([])

    useEffect(()=>{
        api.get('product').then(response=>{
            setProduct(response.data)
        })
    }, [])

    useEffect(()=>{
        api.get('store').then(response=>{
            setStore(response.data)
        })
    }, [])

    return(
        <div className="carousel-container">
           
                 <img className="avatarLogo" src={avatar} alt=""/>
                 <h1>Madame Ristow</h1>
                 <div className="cards">
                 <button><GrFormPrevious style={{fontSize: '50px'}}/></button>
            {product.map(item=>(
                  <Card className="onlyCard" style={{ width: '14rem' }}>
                 <Card.Img style={{ height: '413px'}} variant="top" src={item.image_url} />
                 <button className="buttonFavorite"><MdFavoriteBorder/></button>
                 <button className="buttonFavorite"><MdFavoriteBorder/></button>
                 <Card.Body>
                     <Card.Text>
                     {item.name_product}<br/>
                        <strong>R$ {item.price}</strong>
                     </Card.Text>
                     <Link to={`/product/${item.id_product}`}><Button className="buttonBuy">Comprar</Button></Link>
                 </Card.Body>
                 </Card>
            ))}
            <button><GrFormNext style={{fontSize: '50px'}}/></button>
             </div>
            
                
             
        </div>
                
    )

}

export default Carousel