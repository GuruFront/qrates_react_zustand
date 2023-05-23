import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as swiper from 'swiper'
import 'swiper/css';
import './style.scss'
import MockData from '../MockData'


const About = () => {
  return (
    <div className='aboutWrap'>
      <Navigation />
      <div className='aboutSlider'>
        <div className='aboutSlider__wrap'>
          <Swiper
            spaceBetween={20}
            loop={true}
            navigation={true}
            modules={[swiper.Navigation]}
            slidesPerView={2}
            breakpoints={{
              769: {
                slidesPerView: 3,
              },
            }}
          >
            {MockData().cards.map((i, idx) => <SwiperSlide key={idx}>
              <img className='aboutSlider__img'
                   src={i.image_url}
                   alt='' />
            </SwiperSlide>)
            }
          </Swiper>
        </div>
        <h1 className='aboutSlider__title'>
          QRATES
        </h1>
        <b className='aboutSlider__subText'>
          We`re record and cassette lovers, music fans. We believe they serve an important connection between musicians
          and fans. So we built Qrates to help artists bring the magic of music on physical things to more people.
        </b>
      </div>

    </div>
  )
}

export default About