import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '100vh'}}>
      <div>
        <h3>Want to ask some questions? Or maybe take a look at my resume?</h3>
        <h3>Here is a link to my resume as well as my Twitter and LinkedIn accounts.</h3>

        <h3>Twitter</h3>
        <h5><AnchorLink style={{ textDecoration: 'none' }} href="https://twitter.com/jcorbin_dev"><u>@jcorbin_dev</u></AnchorLink></h5>

        <h3>LinkedIn</h3>
        <h5><AnchorLink href="https://www.linkedin.com/in/jamesbcorbin/"><u>James Corbin</u></AnchorLink></h5>

        <h3>Resume</h3>
        <h5><AnchorLink href='https://docs.google.com/document/d/1BNYLRqchs3La6DFyEucbr6tUNS1cKcWCaGLIsOXuW4Y/edit?usp=sharing'><u>JamesC_Resume</u></AnchorLink></h5>





      </div>
    </div>
  )
}

export default Contact


const AnchorLink = styled.a`
text-decoration: none;
cursor: pointer;
color: black;
`