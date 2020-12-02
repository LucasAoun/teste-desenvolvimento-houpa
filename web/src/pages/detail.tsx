import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import api from "../services/api";
import Menu from '../components/Menu'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import photoDetail from '../assets/product-top.png'
import '../styles/pages/detail.css'
import pinterest from '../assets/Sub7.svg'
import whatsapp from '../assets/Sub6.svg'
import facebook from '../assets/Sub5.svg'
import instagram from '../assets/Sub4.svg'
import linkedin from '../assets/Sub3.svg'

    interface Product{
    serializedProdKey:{
    product_name: String
    price: number
    description: string
    pquantity: number
    mquantity: number
    gquantity: number
    ggquantity: number
    photo: String
        }
  }
interface ProductParams{
    id_product: string
  }

function Detail(){

    const params = useParams<ProductParams>()
    const [product, setProduct] = useState<Product>()
  
      useEffect(()=>{
          api.get(`product/${params.id_product}`).then(res =>{   
              setProduct(res.data)
          })
      }, [params.id_product])
  
      if(!product){
        return <p>Loading...</p>
      }


    return(
        <div className="page-detail">
            <Menu/>
            <div className="detail-container">
            <div className="detail-content">
                <Link to="/">Voltar</Link>
                <span>Home &gt; Madame Ristow &gt; vestidos</span>
                <img src={photoDetail} alt=""/>
                <div className="description">
                    <span>{product.serializedProdKey.description}</span>
                </div>
            </div>
            <div className="detail-buy">
                <span id="category">Vestidos</span><br/>
                <h1>Vestido Curto</h1>

                <div className="production">
                     <span>Produzido e entregue por Madame Ristow Vendido por: Parthenon</span>
                </div>

                <h1 id="price">R${product.serializedProdKey.price},00</h1>
                <span id="installment">ou até 5x de R$ 9,03 | Atacado mínimo: 6 peças</span>
            <div className="sizes">
                <strong>Tamanho:</strong><br/>
                <Button className="buttonSize">P</Button>
                <Button className="buttonSize">M</Button>
                <Button className="buttonSize">G</Button>
                <Button className="buttonSize">GG</Button>
            </div>
            <div className="quantity">
                <span>Quantidade</span><br/>    
                <select name="quantityItem" id="quantityItem">
                    {<option value="1">{product.serializedProdKey.pquantity}</option>}
                </select>
                <span>Avise-me quando chegar</span>
            </div>
            <div className="buttonsDetail">
            <Button className="buttonBuy">Comprar</Button><br/>
            <Button className="buttonBuy" id="buttonCar">Adicionar ao Carrinho</Button>
            </div>

            <div className="frete">
                <h1>Frete</h1>
                <p>Calcule o frete da sua região</p>
                <input type="number" className="cepInput" id="cepInput" placeholder="CEP"/>
                <Button className="calcFrete">Calcular</Button>
                <p>Não sei meu cep</p>
            </div>

            <div className="share">
                <h1>Compartilhar</h1>
                <img src={whatsapp} alt=""/>
                <img src={pinterest} alt=""/>
                <img src={instagram} alt=""/>
                <img src={facebook} alt=""/>
                <img src={linkedin} alt=""/>
            </div>

            </div>
            </div>
        </div>
    )
}

export default Detail