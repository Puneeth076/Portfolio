import React from 'react'
import "./Portfolio.css"
import IMG1 from '../../assets/Home/portfolio1.jpg'
import IMG2 from '../../assets/Home/portfolio2.jpg'
import IMG3 from '../../assets/Home/portfolio3.jpg'
import IMG4 from '../../assets/Home/portfolio4.jpg'
import IMG5 from '../../assets/Home/portfolio5.png'
import IMG6 from '../../assets/Home/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title:'crypto currency',
    github: 'https://github.com/crypto/crypto.github.com',
    demo: 'https://dribble.com'
  },
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article key={id} className="portfolio__item">
              <div   className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} target="_blank" className='btn'>Github</a>
              <a href={demo} className="btn btn-primary">Live demo</a>
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
