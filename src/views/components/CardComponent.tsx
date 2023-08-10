import React from 'react'

import '../../css/card_styles/card_styles.css'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function CardComponent({ path, title, description }: any) {
    return (
        <Card>
            <Card.Img variant="top" src={path}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="card-text">
                    {description}
                </Card.Text>
                <Button variant="primary">Read more</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent