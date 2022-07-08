import React from "react";
import {Carousel} from "react-bootstrap";
import ocean from "../ocean.jpg"

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100" src={ocean} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hello World</h3>
                    <p>It's work!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100" src={ocean} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hello World</h3>
                    <p>It's work!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100" src={ocean} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Hello World</h3>
                    <p>It's work!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider