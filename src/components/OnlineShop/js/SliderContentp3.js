import React from 'react';

function SliderContentp3({activeIndex, imageSliderp3}){

  return (
    <>
      {imageSliderp3.map((slide, index) => (
        <div key={index} 
           className={index === activeIndex 
            ? "p3-slider p3-active" 
            : "p3-inactive"
          }
        >
          <img className="p3-slider-img" src={slide.urls} alt=""/>
          <div>
            <h2 style={{textAlign: "center", margin: "auto" }}
              className="p3-slider-content-title">
                {slide.title}
            </h2> 
            <h3 className="p3-slider-content-txt">{slide.description}</h3>
            <a href="https://pedrotuarez.github.io/onlineshop"
              className="p3-slider-content-btn">
                {slide.btn}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default SliderContentp3;