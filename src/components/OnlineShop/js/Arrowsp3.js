import React from 'react';

function Arrowsp3({ prevSlidep3, nextSlidep3 }) {

  return (
    <>
      <div className="p3-arrows-left">
        <span className="p3-prev" onClick={prevSlidep3}>
          &#10094;
        </span>
      </div>
      <div className="p3-arrows-right">
        <span className="p3-next" onClick={nextSlidep3}>
          &#10095;
        </span>
      </div>
    </>
  );
}

export default Arrowsp3;