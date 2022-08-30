import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Main code of the section
const data = [
  {
    avatar: AVTR1,
    name: 'Nizar Triki (Senior Software Developer)',
    review: 'I’ve had the pleasure of knowing Savalan for over 5 months, during which I mentored him on CareerFoundry’s Full-Stack Web Development course. Above all, I was impressed with Savalan’s ability to master new skills in a short period of time and his yearn to deliver more than the minimum requirements on projects he worked on. He demonstrated this in the projects he built using Node.js, React.js, and Angular. Savalan has a strong work ethic, always met project deadlines, and he is able to communicate effectively even in remote work environments. '
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5></h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials