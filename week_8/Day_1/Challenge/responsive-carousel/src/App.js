import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required library CSS
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Travel Destinations</h2>
      
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        autoPlay={true} 
        interval={3000}
      >
        {/* Slide 1: Hong Kong */}
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>

        {/* Slide 2: Macao */}
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Macao" />
          <p className="legend">Macao</p>
        </div>

        {/* Slide 3: Japan */}
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan" />
          <p className="legend">Japan</p>
        </div>

        {/* Slide 4: Las Vegas */}
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
