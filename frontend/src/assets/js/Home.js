import {Component} from "react";
import {Carousel} from "react-bootstrap";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import carousel3 from "../images/carousel3.png";
import "../css/Home.css";

export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home_background">

                    <div className="home_carousal_div">
                        <Carousel className="home_carousal">
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src={carousel1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Instant Deal</h3>
                                    <p>Purchase or sale your products in minutes.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src={carousel2}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Best Prices</h3>
                                    <p>Get ultimate reward of your hard work by getting high profit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-75"
                                    src={carousel3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Hassle Free Trade</h3>
                                    <p>Trade from your home in minutes and enjoy the free time.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className="home_intro_div">
                        <h2>E-Farm | B2B E-Commerce </h2>
                        <h4>to increase your farming productivity.</h4>
                        <br/>
                        <h6>E-Farm is a multi-channel application for B2B Trading of Farming Products.</h6>
                        <br/>
                        <h6>Your farm produces and our system do the rest.</h6>
                    </div>
                </div>
            </div>
        );
    }
}