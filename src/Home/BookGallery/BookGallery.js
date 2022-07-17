import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './BookGallery.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const BookGallery = () => {
    return (
        <div className="py-5">
            <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-5">Books Gallery</h1>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    // centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        loop: true,
                        speed: 600,

                        slideShadows: true
                    }
                    }
                    autoplay={{
                        delay: 1000
                    }}


                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/Sx861HL/2.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://m.media-amazon.com/images/I/51iwVVGraqL.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://i.ibb.co/fNR0gWW/3.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/rypJb5p/4.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51BKn+OKctL._SX332_BO1,204,203,200_.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default BookGallery;