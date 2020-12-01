import React from 'react'
import {Card, Button} from 'react-bootstrap'
import '../styles/components/carousel.css'
import photo from '../assets/image-product.png'
import avatar from '../assets/avatar.png'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {MdFavoriteBorder} from 'react-icons/md'

function Carousel(){
    return(
        <div className="carousel-container">
            <img className="avatarLogo" src={avatar} alt=""/><h1>Madame Ristow</h1>
            <div className="cards">
            <button><GrFormPrevious style={{fontSize: '50px'}}/></button>
             <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>
            <button><GrFormNext style={{fontSize: '50px'}}/></button>
            </div>
            <img className="avatarLogo" src={avatar} alt=""/><h1>Madame Ristow</h1>
            <div className="cards">
            <button><GrFormPrevious style={{fontSize: '50px'}}/></button>
             <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ height: '413px'}} variant="top" src={photo} />
            <button className="buttonFavorite"><MdFavoriteBorder/></button>
            <Card.Body>
                <Card.Text>
                Blusa Feminina Básica Manga Curta Marisa<br/>
                <strong>R$57,00</strong>
                </Card.Text>
                <Button className="buttonBuy">Comprar</Button>
            </Card.Body>
            </Card>
            <button><GrFormNext style={{fontSize: '50px'}}/></button>
            </div>
        </div>
    )
}

export default Carousel