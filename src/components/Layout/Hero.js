import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../ExampleCarouselImage';
import banner from '../../assets/images/banner-1.jpg'
import banner1 from '../../assets/images/banner-2.jpg'
import banner2 from '../../assets/images/banner-3.jpg'


const Hero =()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage  src={banner} text="Welcome To Purminder Kaur & Associates" subtext="One Stop Accounting, Tax & Audit Firm"  herobtn="Get Advice" spantext="Do You Need Any Advice for START-UP ? We Can Help You !"/>
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage  src={banner1} text="Welcome To Purminder Kaur & Associates" subtext="One Stop Accounting, Tax & Audit Firm"  herobtn="Send Enquiry" spantext="Do You Need Any Advice for START-UP ? We Can Help You !" />
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage  src={banner2} text="Welcome To Purminder Kaur & Associates" subtext="One Stop Accounting, Tax & Audit Firm"  herobtn="Send Enquiry" spantext="Do You Need Any Advice for START-UP ? We Can Help You !" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;

