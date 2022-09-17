import React from 'react'
import styled from 'styled-components'


const Home = () => {

  const Home = styled.div`
    
    background-color: darkgreen;
    margin: 2rem;
    border-radius: 10px;
    height: 100vh;
    
    
    h1 {
      margin: 2rem;
    }
  `


  return (
    <Home>
      <h1>This is the home base for all things related to my dev career.</h1>
      <h1>All of my finished projects and my blog will be available here.</h1>
      <h1>Feel free to check me out at twitter @jcorbin_dev</h1>

    </Home>
  )
}

export default Home