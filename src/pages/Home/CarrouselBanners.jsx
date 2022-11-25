import React from 'react';
import  "./CarrouselBanner.css"

const CarrouselBanners = () => {
  return (
    <section className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src='https://res.cloudinary.com/dpnrbius0/image/upload/v1667945467/cld-sample-4.jpg' className={'carouselImg'} />
        </div>
        <div className="carousel-item">
          <img src='https://res.cloudinary.com/dpnrbius0/image/upload/v1668562597/pexels-jane-doan-1099680_ua1oxy.jpg' className={'carouselImg'} />
        </div>
        <div className="carousel-item">
          <img src='https://res.cloudinary.com/dpnrbius0/image/upload/v1668562606/pexels-roman-odintsov-4958641_cbjomr.jpg' className={'carouselImg'} />
        </div>
      </div>
    </section>
  );
};

export default CarrouselBanners;

