import React from 'react';
import { Carousel, Figure, Image } from 'react-bootstrap';
import './Main.css';

function Main() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image
            style={{
              height: 500,
              width: '100%',
              marginTop: 10,
              marginBottom: 50,
            }}
            className="product1"
            src="https://picsum.photos/600/600/?random"
            alt="First Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            style={{
              height: 500,
              width: '100%',
              marginTop: 10,
              marginBottom: 50,
            }}
            className="product2"
            src="https://picsum.photos/600/600/?random"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <Figure>
        <Figure.Caption>
          <h1>추천상품</h1>
        </Figure.Caption>

        <Figure.Image
          width={171}
          height={180}
          alt="recommend"
          src="https://picsum.photos/600/600/?random"
        />
      </Figure>
    </div>
  );
}

export default Main;
