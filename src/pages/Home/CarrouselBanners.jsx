import React from 'react';

const CarrouselBanners = () => {
  return (
    <div 
      id="carouselExampleIndicators" 
      className="carousel carousel-dark slide" 
      data-bs-ride="true"
      
    >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div 
    className="carousel-inner" 
    style={{
      'height':'60vh',
      'objectFit':'cover',
      'objectPosition' : 'center',
    }}
    >
    <div className="carousel-item active">
      <img 
        src='https://res.cloudinary.com/dpnrbius0/image/upload/v1667945467/cld-sample-4.jpg' 
        className="d-block w-100 img-fluid" 
        alt="..." 
        style={{
          'objectFit':'cover',
          'objectPosition' : 'center',
       }}
      />
    </div>
    <div className="carousel-item">
      <img 
       src='https://res.cloudinary.com/dpnrbius0/image/upload/v1668562606/pexels-roman-odintsov-4958641_cbjomr.jpg' 
       className="d-block w-100 img-fluid" 
       alt="..." 
       style={{
          'objectFit':'cover',
          'objectPosition' : 'center',
       }}
      />
    </div>
    <div className="carousel-item">
      <img 
       src='https://res.cloudinary.com/dpnrbius0/image/upload/v1668562597/pexels-jane-doan-1099680_ua1oxy.jpg' 
       className="d-block w-100 img-fluid" 
       alt="..." 
      />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default CarrouselBanners;