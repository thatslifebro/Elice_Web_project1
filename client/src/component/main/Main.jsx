import React from 'react';
import { Figure, Image } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import MultipleItems from './multipleItems';

import main1 from './mainImage/main1.jpg';
import main2 from './mainImage/main2.jpg';

import './Main.css';
function Main() {
  return (
    <>
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
          src="https://cdn.pixabay.com/photo/2014/12/02/03/11/grapes-553464_960_720.jpg"
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>
      <div className="container">
        <h5>신상</h5>
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
      <div className="container">
        <Figure>
          <h5>이번달 인기 상품입니다</h5>
          <Figure.Caption></Figure.Caption>

          <Figure.Image
            width={171}
            height={180}
            style={{
              marginLeft: 50,
            }}
            alt="recommend"
            src="https://picsum.photos/600/600/?random"
          />

          <Figure.Image
            width={171}
            height={180}
            style={{
              marginLeft: 30,
            }}
            alt="recommend"
            src="https://picsum.photos/600/600/?random"
          />

          <Figure.Image
            width={171}
            height={180}
            style={{
              marginLeft: 30,
            }}
            alt="recommend"
            src="https://picsum.photos/600/600/?random"
          />
        </Figure>
      </div>
    </>
  );
}

export default Main;
