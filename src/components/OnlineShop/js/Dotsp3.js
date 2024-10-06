import React from 'react';

function Dotsp3({activeIndex, onclick, imageSliderp3}) {
  return (
    <div className="p3-all-dots">
      {imageSliderp3.map((slide, index) => (
       <span key={index} 
        className={`${activeIndex === index ? "p3-dot p3-active-dot" : "p3-dot"}`}
        onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dotsp3;