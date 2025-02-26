import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "src/assets/images/carousel/homepageCarousel1.jpg",
    "src/assets/images/carousel/homepageCarousel2.jpg",
    "src/assets/images/carousel/homepageCarousel3.jpg",
];

const Carousel: React.FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="w-full mx-auto">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={img} alt={`Slide ${index}`} className="w-full h-120 object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
