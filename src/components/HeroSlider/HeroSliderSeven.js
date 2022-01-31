import Link from "next/link";
import Swiper from "react-id-swiper";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player/lazy';
import Vimeo from '@u-wave/react-vimeo';
const HeroSliderSeven= ({ sliderData }) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    ),
  };
  return (
    <div className="hero-slider-seven">
      <div className="hero-slider-seven__wrapper">
      
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <div
                
                  className="wrapper hero-slider-seven__slide bg-img"
                  // style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
      
<div style={{zIndex:"20!important",position:"absolute!important"}} >
                  
                
                  
                  </div>
                  <div style={{zIndex:"-4"}} className="mobile">
                    <ReactPlayer
  url="https://res.cloudinary.com/american-international-university-bangladesh/video/upload/v1643545451/office-banner_b7fobo.mp4"
 
  playing
  loop
  muted
  width="auto"
  height="auto"
  className="player"
/>
<div className='overlay'>


<svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>


        </div>
                  {/* <Vimeo
  video="671622213"
  autoplay
  width="100%"
  height="inherent"
/> */}
</div>
<div className="desktop">

<ReactPlayer
  url="https://res.cloudinary.com/american-international-university-bangladesh/video/upload/v1643545547/office-banner-mobile_xz8k2v.mp4"
 
  playing
  loop
  muted
  width="auto"
  height="auto"
  className="player"
/>
<div className='overlay'>


<svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>


        </div>
{/* <Vimeo
  video="671622238"
  autoplay
  width="auto"
  height="auto"
/> */}
</div>


                  <div className="hero-slider-seven__pagination">
                    <span className="current">{i + 1}</span>
                    <span className="border"></span>
                    <span className="total">{sliderData.length}</span>
                  </div>
              
                </div>
              );
            })}
      
      </div>
    </div>
  );
};

export default HeroSliderSeven;
