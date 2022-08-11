import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Projects = () => {
  
  const ProjectsPage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
  `
  
  return (
    <ProjectsPage>
      <Card>
        <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>
          <a href='https://jbc2313.github.io/Roulette/'>
            Roulette
          </a>
        </p>
        <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1658207226/html_css_trjtdk.png' alt='htmlcss' />
        <p style={{borderTop: 'solid black 5px'}}>This is info about the project</p>
      </Card>
      <Card>
        <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>
          <a href='https://ineftee.herokuapp.com/'>
            Ineftee
          </a>
        </p>
        <img width='100%' height='100%' src='https://res.cloudinary.com/dhe2c2/image/upload/v1658207221/nodejs_cuy6xg.png' alt='nodejs' />
        <p style={{borderTop: 'solid black 5px'}}>This is info about the project</p>
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
          This is info about my team project!
        </p>
      </Card>
      


    </ProjectsPage>
  )
}

export default Projects