import React from "react";
import {Carousel} from "react-bootstrap";
import classic from "../img/classic.jpg"
import bc from "../img/bc.jpg"
import lc from "../img/lc.jpg"

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '700px'}}>
                <img
                    className="d-block w-100" src={classic} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>World of RChar</h3>
                    <p>Randomaizer in 100%</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}}>
                <img
                    className="d-block w-100" src={lc} alt="2th slide"
                />
                <Carousel.Caption>
                    <h3>Hello World</h3>
                    <p>It's work!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}}>
                <img
                    className="d-block w-100" src={bc} alt="3th slide"
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