import React from 'react'
import styled from 'styled-components'


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
  `
  
  return (
    <ProjectsPage>
      <Card>
        <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>Roulette</p>
        <img width='100%' height='100%' src='/public/html_css.png' alt='htmlcss' />
        <p style={{borderTop: 'solid black 5px'}}>This is info about the project</p>
      </Card>
      <Card>
        <p style={{borderBottom: 'solid black 5px', textAlign: 'center' }}>Ineftee</p>
        <img width='100%' height='100%' src='/public/nodejs.png' alt='nodejs' />
        <p style={{borderTop: 'solid black 5px'}}>This is info about the project</p>
      </Card>
      


    </ProjectsPage>
  )
}

export default Projects