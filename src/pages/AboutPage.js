import React from 'react'

import Header from '../Header.js'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const AboutPage = () => {
  return (
    <div>
      <Header />
        <div style={{height: 54, display: "block"}}></div>
        <Jumbotron>
          <Container>
            <h1>About</h1>
          </Container>
        </Jumbotron>
        <Container>
        </Container>
    </div> 
  )
}

export default AboutPage