import React from 'react'

import '../../css/templates_styles/footer_styles.css'

import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="bg-dark text-light footer-size">
            <Container className="d-flex justify-content-center">
                <Row className="d-flex align-items-center">
                    <p className='mt-2'>© 2022 Copyright</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer