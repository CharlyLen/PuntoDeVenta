import React from 'react'

import { Container, Row, Col, CardGroup, Button } from 'react-bootstrap'

import Header from './Header'
import CardComponent from '../components/CardComponent'
import CarouselComponent from '../components/CarouselComponent'

//Public
import pathImageKingdom from '../../assets/imgs/comics/Kingdom_Come.jpg'
import pathImageBatman from '../../assets/imgs/comics/Killing_Joke_Batman.jpg'
import pathImageSpiderman from '../../assets/imgs/comics/Amazing_Spider-Man.jpg'

//Carusel
import pathImageFirst from '../../assets/imgs/carousel/Superman_Vol_2.jpg'
import pathImageSecond from '../../assets/imgs/carousel/Watch_Men_Vol_1.jpg'
import pathImageThird from '../../assets/imgs/carousel/The_Flash_Vol_1.jpg'
import pathImageFourth from '../../assets/imgs/carousel/Avengers_Vol_1.jpg'
import pathImageFifth from '../../assets/imgs/carousel/Green_ Lantern_Vol_2.jpg'

const titleKingdom = "Kingdom Come"
const titleBatman = "The Killing Joke"
const titleSpiderman = "Amazing Spiderman"

const descriptionKingdom = "Superman has retired, and without his influence, the world has embraced a new generation of heroes led by Magog who resort to violence and barbarism to impart their unique vision of justice."
const descriptionBatman = "Batman's worst enemy, the Joker, has broken out of Arkham prison once again. The criminal takes Inspector Gordon and his daughter, whom he leaves in a wheelchair. With this act, the Joker wants to make Inspector Gordon go crazy."
const descriptionSpiderman = "Like most teenagers his age, Peter is trying to figure out who he is and how he came to be. On his journey to piece together his past, he discovers a family secret that will ultimately shape his destiny as Spider-Man."


function Home() {

    const comic: Comic = {
        title: 'John Doe',
        description: '',
        path: 'johndoe@example.com',
    };

    return (
        <>
            <Header />
            <div>
                <Container className="d-flex justify-content-center">
                    <h1>Comics The Ruminant Sheep</h1>
                </Container>
                <Container>
                    <h3>top sales of the week</h3>
                    <CardGroup className="my-4">
                        <Row xs={1} md={3} className="g-4">
                            <Col><CardComponent path={pathImageBatman} title={titleBatman} description={descriptionBatman} /></Col>
                            <Col><CardComponent path={pathImageKingdom} title={titleKingdom} description={descriptionKingdom} /></Col>
                            <Col><CardComponent path={pathImageSpiderman} title={titleSpiderman} description={descriptionSpiderman} /></Col>
                        </Row>
                    </CardGroup>
                </Container>
                <Container>
                    <h3>Iconic Comics</h3>
                    <div className="d-flex justify-content-center pb-3">
                        <CarouselComponent first_route={pathImageFirst} second_route={pathImageSecond}
                            third_route={pathImageThird} fourth_route={pathImageFourth} fifth_route={pathImageFifth} />
                    </div>
                </Container>
            </div >
        </>
    )
}

export default Home