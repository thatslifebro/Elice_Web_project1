import React from 'react';
import { Figure, Image } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

import './Main.css';
function Main() {
  return (
    <>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          height={500}
          itemId={1}
          src="https://image.newdaily.co.kr/site/data/img/2020/09/21/2020092100085_0.jpg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          height={500}
          itemId={2}
          src="https://www.hipp.co.kr/fileadmin/_processed_/6/0/csm_fruit_cultivation_raspberries_ffe5a5a1f4.jpg"
          alt="..."
        ></MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          height={500}
          itemId={3}
          src="https://image.newdaily.co.kr/site/data/img/2020/09/21/2020092100085_0.jpg"
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>
      <Figure>
        <Figure.Caption>
          <h1 className="rec">추천상품</h1>
        </Figure.Caption>

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
    </>
  );
}

export default Main;
