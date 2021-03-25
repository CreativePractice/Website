import React from 'react'
import img from "../images/creativePracticePeoplePic.png"
import img2 from "../images/bedtimeStoryplay.png"
import img3 from "../images/otherplay.jpg"
import Carousel from 'react-bootstrap/Carousel'

const CarouselPics = () => {
    return (
        <div>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </div>
    )
}

export default CarouselPics
