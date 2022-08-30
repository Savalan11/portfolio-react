import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie API (myFlix Backend)',
    github: 'https://github.com/Savalan11/movie_api',
    demo: 'https://github.com/Savalan11/movie_api'
  },
  {
    id: 2,
    image: IMG2,
    title: 'myFlix (React, Frontend)',
    github: 'https://github.com/Savalan11/myFlix-client',
    demo: 'https://github.com/Savalan11/myFlix-client'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pokedex App',
    github: 'https://github.com/Savalan11/simple-js-app',
    demo: 'https://savalan11.github.io/simple-js-app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'To-do list App',
    github: 'https://github.com/Savalan11/To-do-app-list',
    demo: 'https://savalan11.github.io/To-do-app-list/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Chat App',
    github: 'https://github.com/Savalan11/hello-world',
    demo: 'https://github.com/Savalan11/hello-world'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Simple Calculator',
    github: 'https://github.com/Savalan11/Simple-calculator',
    demo: 'https://savalan11.github.io/Simple-calculator/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio