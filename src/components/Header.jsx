import React from 'react'
import styled from 'styled-components'
import img from '../images/image002.png'

const Container = styled.div`
  background: #fff;
  margin: 1rem;
  `

const Header = () => {
  return (
    <Container>
      <img src={img} alt="img" />
      <hr />
    </Container>
  )
}

export default Header