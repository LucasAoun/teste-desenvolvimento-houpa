import React from 'react'
import Menu from '../components/Menu'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import photoDetail from '../assets/product-top.png'
import '../styles/pages/detail.css'

function Detail(){
    return(
        <div className="page-detail">
            <Menu/>
            <div className="detail-container">
            <div className="detail-content">
                <Link to="/">Voltar</Link>
                <span>Home &gt; Madame Ristow &gt; vestidos</span>
                <img src={photoDetail} alt=""/>
                <div className="description">
                    <span>- Camiseta masculina <br/>
                        - Manga curta - Gola redonda<br/> 
                        - Estampa super herói escudo capitão<br/> 
                        - Marca: Marvel <br/>
                        - Tecido: meia malha <br/>
                        - Composição: 100% algodão <br/>
                        - Modelo veste tamanho: M</span>
                </div>
            </div>
            <div className="detail-buy">
                <span id="category">Vestidos</span><br/>
                <h1>Vestido Curto</h1>

                <div className="production">
                     <span>Produzido e entregue por Madame Ristow Vendido por: Parthenon</span>
                </div>

                <h1 id="price">R$46,00</h1>
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
                    <option value="1">1</option>
                </select>
                <span>Avise-me quando chegar</span>
            </div>
            <Button className="buttonBuy">Comprar</Button><br/>
            <Button className="buttonBuy">Colocar ao Carrinho</Button>
            </div>
            </div>
        </div>
    )
}

export default Detail