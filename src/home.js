import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/cd.webp';
import img2 from './images/kutty.jpg';
import img3 from './images/fish.jpeg';
import './style.css'
import { Link } from 'react-router-dom';
// import { Button} from 'react-bootstrap';

function Home() {
  return (
    <div className='slide'>
    <Carousel variant="dark" fade>
      <Carousel.Item interval={1000}>
        <img
          height="808"
          width="2000"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='img1'>Cats</h3>
          <Link to='/whitefabric'>
          {/* <Button variant="dark" className="mb-3">More info</Button> */}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height="808"
          width="2000"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='img2'>Dogs</h3>
          <Link to='/colour'>
          {/* <Button variant="dark" className="mb-3">More info</Button> */}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height="808"
          width="2000"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='img3'>Fishes</h3>
          <Link to='/printed'>
          {/* <Button variant="dark" className="mb-3">More info</Button> */}
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home

