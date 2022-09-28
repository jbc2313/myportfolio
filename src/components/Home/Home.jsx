import React from 'react'
import styled from 'styled-components'
import './animate.css'

const Home = () => {

  const Home = styled.div`
    
    background-color: #292F40;
    margin: 2rem;
    border-radius: 10px;
    height: 100%;
    padding: 30px;
    
    
    h1 {
      margin: 2rem;
    }
  `


  return (
    <>
    <div className='term'>

    </div>
    <Home>
      <Intro>
        <Heading>Thanks for Stoping In</Heading>
        <Body>
        This is the home base for all things related to my dev career. All of my finished projects and my future blog will be available here. If you have any questions or just want to chat you can find my info here as well.
        </Body>
      </Intro>
    </Home>
    </>
  )
}

export default Home


const Intro = styled.div`
  height: auto;
  width: 45%;
  border: solid black 3px;
  margin: auto;
  margin-top: 50px;
  border-radius: 8px;
  background: black;
`
const Body = styled.p`
  background: #292F40;
  color: white;
`

const Heading = styled.h2`
  text-align: center;
  color: white;
`

