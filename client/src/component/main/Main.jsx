import React from 'react';
import { Figure, Image } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import MultipleItems from './multipleItems';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import main1 from './mainImage/main1.jpg';
import main2 from './mainImage/main2.jpg';
import main3 from './mainImage/main3.jpg';

import './Main.css';
function Main() {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {},
  };
  const settings2 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <>
      <div className="container">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block mb-5"
            height={500}
            itemId={1}
            src={main1}
            alt="..."
          ></MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block mb-5"
            height={500}
            itemId={2}
            src={main2}
            alt="..."
          ></MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block mb-5"
            height={500}
            itemId={3}
            src={main3}
            alt="..."
          ></MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div className="container mb-4">
        <div>
          <h4>신상</h4>
          <Slider {...settings}>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h6>딸기</h6>
              <p>12,300원</p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container mb-4">
        <div>
          <h4>추천 아이템</h4>
          <Slider {...settings2}>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  height="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
            <div>
              <NavLink to={'/product'}>
                <img
                  src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                  width="100%"
                  alt="Lights"
                />
              </NavLink>
              <h5>목살 150g</h5>
              <p>12,300원</p>
            </div>
          </Slider>
        </div>
      </div>
      <div className="container">
        <h5>최근 본 상품</h5>
        <div className="row">
          <div className="col-md-4">
            <NavLink to={'/product'}>
              <img
                src="https://www.pngmart.com/files/21/Strawberries-PNG-Isolated-Picture.png"
                width="100%"
                height="200"
                alt="Lights"
              />
            </NavLink>

            <h4>딸기</h4>
            <p>12,300원</p>
          </div>
          <div className="col-md-4">
            <NavLink to={'/product'}>
              <img
                src="https://www.pngplay.com/wp-content/uploads/1/Grapes-PNG-Photos.png"
                width="100%"
                height="200"
                alt="Lights"
              />
            </NavLink>
            <h4>포도</h4>
            <p>22,300원</p>
          </div>
          <div className="col-md-4">
            <NavLink to={'/product'}>
              <img
                src="https://meattam.com/web/product/tiny/20200604/0ca48a97e692f29867ec586f1f75dc72.png"
                width="100%"
                height="200"
                alt="Lights"
              />
            </NavLink>
            <h4>목살 150g</h4>
            <p>12,300원</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
