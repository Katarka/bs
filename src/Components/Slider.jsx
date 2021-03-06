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
                    <p>Randomaizer in Classic</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}}>
                <img
                    className="d-block w-100" src={bc} alt="2th slide"
                />
                <Carousel.Caption>
                    <h3>World of RChar</h3>
                    <p>Randomaizer in Burning Crusade</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '700px'}}>
                <img
                    className="d-block w-100" src={lc} alt="3th slide"
                />
                <Carousel.Caption>
                    <h3>World of RChar</h3>
                    <p>Randomaizer in Wrath of the Lich King</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider