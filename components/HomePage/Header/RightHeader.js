import { Carousel } from "react-bootstrap"

export default function () {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="static/img/home/sliders/home-hero-img.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="../../../static/img/home/sliders/home-hero-img.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="static/img/home/sliders/home-hero-img.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
};