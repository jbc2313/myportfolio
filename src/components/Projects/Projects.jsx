import React from 'react'
import styled from 'styled-components' 
import { Link } from 'react-router-dom'

const Projects = () => {
  
  const ProjectsPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }

      
  `

  const Card = styled.div`
    margin: 2rem;
    border: solid black 5px;
    box-shadow: 6px 6px 0 0 ;
    border-radius: 16px;
    display: grid;
    grid-template-columns: [first] auto;
    grid-template-rows: [row1-start] 20% [row2-start] 50% [row3-start] 30%;
    width: 200px;
      a {
        text-decoration: none;
        color: black;
      }
    @media (max-width: 600px) {
      p {
        padding: 1.5rem;
        font-size: smaller;
      }
    }

  `
  
  return (
    <div style={{height: '100vh'}}>
      <ProjectsPage>
        <Card>
          <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>
            <a href='https://jbc2313.github.io/Roulette/'>
              Roulette
            </a>
          </p>
          <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1658207226/html_css_trjtdk.png' alt='htmlcss' />
          <p style={{borderTop: 'solid black 5px'}}>JavaScript | HTML | CSS</p>
        </Card>
        <Card>
          <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>
            <a href='https://ineftee.herokuapp.com/'>
              Ineftee
            </a>
          </p>
          <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1658207221/nodejs_cuy6xg.png' alt='nodejs' />
          <p style={{borderTop: 'solid black 5px'}}> Express | EJS </p>
        </Card>
        <Card>
          <p
          style={{borderBottom: 'solid black 5px', textAlign: 'center'}}
          >
            <a href='https://trip-commander.herokuapp.com/'>
              Trip Commander
            </a>
          </p>
          <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1660234322/reacticon_bivaun.svg' alt='reactjs' />
          <p
          style={{borderTop: 'solid black 5px'}}
          >
            React.js |  Express | TailwindCSS 
          </p>
        </Card>
        <Card>
          <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }} >
            <a href='https://retroshack-frontend.vercel.app/' >Retroshack</a>
          </p>
          <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1663427846/nextjs_20210828121943_0_npuchu.png' />
          <p
            style={{borderTop: 'solid black 5px'}}
            >
            {/* This was my final project for GA, It was built with Next.js on the frontend and Express on the backend. I use sequelize with postgresql for the database. */}
            Next.js | Express | Sequelize | Postgresql          
          </p>
        </Card>
        


      </ProjectsPage>
    </div>
  )
}

export default Projects