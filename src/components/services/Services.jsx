import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>General info</h5>
      <h2>Other skills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>10+ years of work experience</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>3+ years of experience in public sector.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>4+ years of experience in private sector.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>3+ years of business activities.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Strong educational background</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Successfully completed Full Stack Immersion Course from CareerFoundry, Germany.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Master Degree in Public Administration from the University of Birmingham, UK.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Master Degree in International Law from Baku State University, Azerbaijan.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bachelor Degree in International Law from Western University, Azerbaijan.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Professional writing skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Published scientific articles in international and regional journals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Published book in Germany.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services