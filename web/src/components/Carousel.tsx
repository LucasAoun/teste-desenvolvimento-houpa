import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Carousel(){
    return(
        <div className="carousel-container">
            <h1>Madame Ristow</h1>
            <div className="cards">
             <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ heigth: '250px'}} variant="top" src="https://i.pinimg.com/originals/01/9e/df/019edf8760948f3555297a226f72d87b.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ heigth: '250px'}} variant="top" src="https://i.pinimg.com/originals/01/9e/df/019edf8760948f3555297a226f72d87b.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ heigth: '250px'}} variant="top" src="https://i.pinimg.com/originals/01/9e/df/019edf8760948f3555297a226f72d87b.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card className="onlyCard" style={{ width: '14rem' }}>
            <Card.Img style={{ heigth: '250px'}} variant="top" src="https://i.pinimg.com/originals/01/9e/df/019edf8760948f3555297a226f72d87b.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            
            </div>
        </div>
    )
}

export default Carousel