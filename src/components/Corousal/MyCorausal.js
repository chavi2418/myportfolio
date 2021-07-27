import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import "./MyCorausal.css";

function MyCorausal() {
    return (
        <div id="home">
            <Carousel control={false} indicators={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-img"
                    src={slide3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default MyCorausal;
