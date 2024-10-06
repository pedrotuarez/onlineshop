import React, { useState, useEffect } from 'react';
import ShowMenu from './js/menu.js';
import SliderContentp3 from './js/SliderContentp3';
import Arrowsp3 from './js/Arrowsp3';
import imageSliderp3 from './js/imageSliderp3';
import imagesMain from './js/imagesMain';
import './css/OnlineShop.css';
import './css/FontAwesomeAll.css';

let len = 0;

function OnlineShop() {
  const [activeIndex, setActiveIndex] = useState(0);

  len = imageSliderp3.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <header className="p3-main-header">
        <div className="p3-container p3-container-flex">
          <div className="p3-main-header-container">
            <h1 className="p3-main-header-title">GLASSES</h1>
            <button className="p3-icon-menu" id="p3-btn-menu" onClick={ShowMenu}>
              <span><i className="fas fa-bars"></i></span>
              <span className="p3-none">X</span>
            </button>
            <nav className="p3-main-nav" id="p3-main-nav">
              <ul className="p3-menu">
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/portfolio" 
                    className="p3-menu-link">
                      PORTFOLIO
                  </a>
                </li>
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/onlineshop" 
                    className="p3-menu-link">
                      HOME
                  </a>
                </li>
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/onlineshop" 
                    className="p3-menu-link">
                      ABOUT
                  </a>
                </li>
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/onlineshop" 
                    className="p3-menu-link">
                      FEATURES
                  </a>
                </li>
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/onlineshop" 
                    className="p3-menu-link">
                      SHOP
                  </a>
                </li>
                <li className="p3-menu-item">
                  <a href="https://pedrotuarez.github.io/onlineshop" 
                    className="p3-menu-link">
                      CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="p3-main-header-container">
            <span className="p3-main-header-txt">Need Help</span>
            <p className="p3-main-header-txt">
              <i className="fas fa-phone p3-main-header-phone"></i> Call 0012229999
            </p>
          </div>

          <div className="p3-main-header-container">
            <a href="https://pedrotuarez.github.io/onlineshop" 
              className="p3-main-header-link">
                <i className="fas fa-user"></i>
            </a>
            <a href="https://pedrotuarez.github.io/onlineshop" 
              className="p3-main-header-btn">
                My Cart <i className="fas fa-shopping-cart"></i>
            </a>
            <input
              type="search"
              placeholder="Search products"
              className="p3-main-header-input"
            />
            <i className="fas fa-search"></i>
          </div>
          
        </div>
      </header>

      <div className="p3-container-slider">
        <div className="p3-slider">
          <div className="p3-slider-section">
            <SliderContentp3 
              activeIndex={activeIndex} 
              imageSliderp3={imageSliderp3}
            />
            <Arrowsp3 prevSlidep3={
                () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
              } 
              nextSlidep3={
                () => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              }
            />
          </div>
        </div>
      </div>

      <main className="p3-main">
        <div className="p3-container">
          <h2 className="p3-main-title">New Arrivals for you</h2>
          <section className="p3-container-products">
            <div className="p3-product">
              <img src={imagesMain[2].src} alt={imagesMain[2].alt} 
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Farenheit (Grey)</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[3].src} alt={imagesMain[3].alt} 
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Opium (Grey)</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[4].src} alt={imagesMain[4].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Kenneth Cole</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[5].src} alt={imagesMain[5].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Farenheit Oval</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[6].src} alt={imagesMain[6].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Aislin Wayfarer</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[7].src} alt={imagesMain[7].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Azmani Round</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[8].src} alt={imagesMain[8].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Farenheit Wayfarer</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
            <div className="p3-product">
              <img src={imagesMain[9].src} alt={imagesMain[9].alt}
                className="p3-product-img"
              />
              <div className="p3-product-description">
                <h3 className="p3-product-title">Fossil Wayfarer</h3>
                <span className="p3-product-price">$25.00</span>
              </div>
              <i className="fas fa-cart-plus p3-product-icon"></i>
            </div>
          </section>
        </div>

        <section className="p3-container-testimonials">
          <h2 className="p3-testimonial-title">Testimonials</h2>
          <h3 className="p3-testimonial-customer"><b>Ana María</b> Customer</h3>
          <h4 className="p3-testimonial-location">Canada</h4>
          <p className="p3-testimonial-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias quas, numquam veritatis illo assumenda dolorum
            consequuntur quibusdam a laborum quisquam in ut vitae
            reprehenderit delectus autem earum esse ex impedit.
          </p>
        </section>

        <div className="p3-container-edit">
          <div className="p3-edit-item">
            <img src={imagesMain[1].src} alt={imagesMain[1].alt}
              className="p3-edit-img"
            />
            <p className="p3-edit-circle">EXPRESS YOUR STYLE NOW</p>
          </div>
          <div className="p3-edit-item">
            <img src={imagesMain[0].src} alt={imagesMain[0].alt}
              className="p3-edit-img"
            />
            <p className="p3-edit-circle">EXPRESS YOUR STYLE NOW</p>
          </div>
        </div>

        <section className="p3-container-tips">
          <div className="p3-tips">
            <i className="far fa-hand-paper"></i>
            <h2 className="p3-tips-title">Satisfaction Guaranteed</h2>
            <p className="p3-tips-txt">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
              eget lacinia odio sem nec elit.
            </p>
            <a href="https://pedrotuarez.github.io/onlineshop"
              className="p3-btn-tips">
                SHOP NOW
            </a>
          </div>
          <div className="p3-tips">
            <i className="fas fa-rocket"></i>
            <h2 className="p3-tips-title">Fast Shipping</h2>
            <p className="p3-tips-txt">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
              eget lacinia odio sem nec elit.
            </p>
            <a href="https://pedrotuarez.github.io/onlineshop"
              className="p3-btn-tips">
                SHOP NOW
            </a>
          </div>
          <div className="p3-tips">
            <i className="fas fa-cog"></i>
            <h2 className="p3-tips-title">UV Protection</h2>
            <p className="p3-tips-txt">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
              eget lacinia odio sem nec elit.
            </p>
            <a href="https://pedrotuarez.github.io/onlineshop"
              className="p3-btn-tips">
                SHOP NOW
            </a>
          </div>
        </section>
        
        {/* seccion por construir: container-info */}

      </main>

      <footer className="p3-main-footer">
        <div className="p3-footer-section">
          <h2 className="p3-footer-title">About Us</h2>
          <p className="p3-footer-txt">
            Curabitur non nulla sit amet nislinit tempus convallis quis ac
            lectus. lac inia eget consectetur sed, convallis at tellus. 
            Nulla porttitor accumsana tincidunt.
          </p>
          <a href="https://pedrotuarez.github.io/onlineshop">
            <i className="fab fa-facebook-f p3-footer-icon"></i>
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop">
            {/* <i className="fab fa-twitter p3-footer-icon"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              style={{width: "17px", fill: "#9e9d9d", marginBottom: "-3px"}}
              className="p3-footer-icon"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 
                106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
                48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop">
            <i className="fab fa-google-plus-g p3-footer-icon"></i>
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop">
            <i className="fab fa-linkedin-in p3-footer-icon"></i>
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop">
            <i className="fas fa-rss p3-footer-icon"></i>
          </a>
        </div>
        <div className="p3-footer-section">
          <h2 className="p3-footer-title">Get in touch</h2>
          <h4>Location:</h4>
          <p className="p3-footer-txt">
            0000 9th Avenue, New York City
          </p>
          <h4>Contact:</h4>
          <p className="p3-footer-txt">
            Phone : +000 999 8888 7777
          </p>
          <p className="p3-footer-txt">
            Email : info@pedrotuarez.com
          </p>
        </div>
        <div className="p3-footer-section">
          <h2 className="p3-footer-title">Quick Links</h2>
          <a href="https://pedrotuarez.github.io/onlineshop" 
            className="p3-footer-link">
              Home
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop" 
            className="p3-footer-link">
              About
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop"
            className="p3-footer-link">
              Error
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop"
            className="p3-footer-link">
              Shop
          </a>
          <a href="https://pedrotuarez.github.io/onlineshop"
            className="p3-footer-link">
              Contact Us
          </a>
        </div>
        <div className="p3-footer-section">
          <h2 className="p3-footer-title">Sign up for your offers</h2>
          <p className="p3-footer-txt">
            By subscribing to our mailing list you will always get latest news
            and updates from us.
          </p>
          <div className="p3-footer-form">
            <input type="email"
              placeholder="Enter your email..."
              className="p3-footer-input"
            />
            <button className="p3-footer-btn">
              <i className="far fa-envelope" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="p3-footer-section">
          <div className="p3-footer-copy">
            <p className="p3-footer-copy-txt">
              &copy; 2024 Glasses. All Rights Reserved | Design by 
            </p>
            <a href="https://pedrotuarez.github.io/onlineshop"
              className="p3-footer-copy-link">
                @pedrotuarez
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default OnlineShop;