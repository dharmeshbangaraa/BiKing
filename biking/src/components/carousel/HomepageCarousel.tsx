import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface CarouselImage {
    id: number;
    src: string;
}

const images: CarouselImage[] = [{
    id: 1,
    src: "/images/carousel/homepageCarousel1.jpg"
},
{
    id: 2,
    src: "/images/carousel/homepageCarousel3.jpg"
}
];


const Carousel: React.FC = () => {

    const settings = {
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
                {images.map((img) => (
                    <div key={img.id} className="flex justify-center">
                        <img src={img.src} alt={`Slide ${img.id}`} className="w-full h-120 object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
