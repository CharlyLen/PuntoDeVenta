import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent({ first_route, second_route, third_route, fourth_route, fifth_route }: any) {
    return (
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-img"
                    src={first_route}
                    alt="Imagen 1"
                />
                <Carousel.Caption>
                    <h3>Título de la imagen 1</h3>
                    <p>Descripción de la imagen 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-img"
                    src={second_route}
                    alt="Imagen 2"
                />
                <Carousel.Caption>
                    <h3>Título de la imagen 2</h3>
                    <p>Descripción de la imagen 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-img"
                    src={third_route}
                    alt="Imagen 3"
                />
                <Carousel.Caption>
                    <h3>Título de la imagen 3</h3>
                    <p>Descripción de la imagen 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-img"
                    src={fourth_route}
                    alt="Imagen 3"
                />
                <Carousel.Caption>
                    <h3>Título de la imagen 4</h3>
                    <p>Descripción de la imagen 4</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-img"
                    src={fifth_route}
                    alt="Imagen 3"
                />
                <Carousel.Caption>
                    <h3>Título de la imagen 5</h3>
                    <p>Descripción de la imagen 5</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;