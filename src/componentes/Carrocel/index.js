import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carrocel.css';

const Carrocel = () => {
  return (
    <section className="container__carrocel">
      <h2 className="titulo__carrocel">Skills</h2>
      <div className="carrocel-wrapper">
        <Carousel showThumbs={false} autoPlay={false} infiniteLoop={true} showStatus={false} interval={2000}>
          <div>
            <img src="../IMG/skils/logo html.png" alt="HTML Logo" />
          </div>
          <div>
            <img src="../IMG/skils/logo css.png" className='logo__css' alt="CSS Logo" />
          </div>
          <div>
            <img src="../IMG/skils/logo js.png" alt="JavaScript Logo" />
          </div>
          <div>
            <img src="../IMG/skils/react logo.png" alt="React Logo" />
          </div>
          <div>
            <img src="../IMG/skils/bootstrap logo.jpeg" alt="React Logo" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Carrocel;
