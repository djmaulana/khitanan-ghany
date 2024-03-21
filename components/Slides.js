import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


const Slides = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='mx-auto ' style={{ maxWidth: '300px'}}>
        <Slider {...settings}>
            {images.map((image, index) => (
        <div key={index} className='mx-auto'>
            <Image 
            src={image} 
            alt={`Slide ${index}`} 
            width={300}
            height={300}
            className=''
            />
        </div>
        ))}
        </Slider>
    </div>
  )
}

export default Slides