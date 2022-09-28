import React from 'react'
import styled from 'styled-components'


const About = () => {
  return (
    <div style={{height: '200vh'}}>
      <Intro>
        <Heading>More about me and my skills.</Heading>
        <Body>
          I am a full stack developer on a lifelong pursuit to gain more knowledge. Whether its another programming language, how a 6502 Proccesor works and what tech it powered, or the max range of a 120 mm HE mortar round. I am constantly learning. I pride myself on that. I spent 4.5 years in the US Army, So I know what it means to work effectively with a team. Although I was a Indirect-Fire Infantryman while serving in the Army,  I have always been highly intrigued by programming and computers in general. I recently graduated from General Assembly's Software Engineering Immersive. I am looking forward to being involved in the growth of this awesome industry. I know I will be a highly valuable asset to any company who decides my skills are a match for their goals. 
        </Body>
      </Intro>
      <div style={{margin: 'auto', marginTop: '30px' , width: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <CircContainer>
          <Circ>
            {/* Frontend  */}
            {/* <img height={50} src='https://res.cloudinary.com/dhe2c2/image/upload/v1660234322/reacticon_bivaun.svg' alt='react logo' /> */}
          </Circ>
          <CircDiv>
            <ul>
              <li> React </li>
              <li> Vanilla HTML/CSS </li>
              <li> Tailwinds </li>
            </ul>
          </CircDiv>
        </CircContainer>
        <CircContainer>
          <CircDiv>
            <ul>
              <li> Node </li>
              <li> Django </li>
              <li> Sanity CMS </li>
              <li> Caddy </li>
              <li> Linode </li>
              <li> Heroku </li>
              <li> Netlify </li>
            </ul>
          </CircDiv>
          <Circ2>
            {/* Backend  */}
          </Circ2>
        </CircContainer>
        <CircContainer>
          <Circ3>
            {/* Node.js  */}
          </Circ3>
          <CircDiv>
            <ul>
              <li> Express </li>
              <li> EJS </li>
              <li> Puppeteer </li>
              <li> Mongoose </li>
              <li> Sequelize </li>
              {/* ADD Sequalize after you build something with it */}
            </ul>
          </CircDiv>
        </CircContainer>
        <CircContainer>
          <CircDiv>
            <ul>
              <li> Next.js </li>
              <li> SWR </li>
              <li> React Router </li>
              <li> Create React App </li>
            </ul>
          </CircDiv>
          <Circ4>
            {/* React.js  */}
          </Circ4>
        </CircContainer>
        <CircContainer>
          <Circ5>
            {/* Python  */}
          </Circ5>
          <CircDiv>
            <ul>
              <li> Python </li>
              <li> Django REST framework </li>
            </ul>
          </CircDiv>
        </CircContainer>
        <CircContainer>
          <CircDiv>
            <ul>
              <li> MongoDb </li>
              <li> Postgresql </li>
            </ul>
          </CircDiv>
          <Circ6>
            {/* Databases */}
          </Circ6>
        </CircContainer>
      </div>



    </div>
  )
}

export default About


const Intro = styled.div`
  height: auto;
  width: 45%;
  border: solid black 3px;
  margin: auto;
  margin-top: 10px;
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



const CircContainer = styled.div`
  display: flex;
`

const CircDiv = styled.div`
  color: white;
`

const Circ = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1660234322/reacticon_bivaun.svg');
  background-size: 90px;
    
`

const Circ2 = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1664324049/nodejs-45adbe594d_le3srs.png');
  background-size: 90px;
    
`
const Circ3 = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1664324183/6202fcdee5ee8636a145a41b_1234_ykdqrd.png');
  background-size: 90px;
    
`

const Circ4 = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1664324322/nextjs_tswhev.png');
  background-size: 110px;
  background-position-x: -9px;
    
`


const Circ5 = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1664324602/django_j2z1ua.png');
  background-size: 90px;
    
`

const Circ6 = styled.div`
  background-color: black;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: inline-block;
  background-image: url('https://res.cloudinary.com/dhe2c2/image/upload/v1664324633/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67_mltkaw.png');
  background-size: 107px;
  background-position-x: -10px;
    
`