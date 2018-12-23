import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// Sub-components
import ListLink from './ListLink'


import keys from '../images/crossedkeys.png'

const NavWrapper = styled.div`

  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: #000729;
  width: 100vw;



  li a {
    color: black;
    text-decoration: none;
    display: block;
    text-align: center;
    width: 10vw;
    color: white;
    font-size: 1.5em;
    margin-top: 2.5vw;
  }

  li {
    float: left;
    margin-right: 4vw;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  #crossedkeysLogo {
    margin-top: 1.5vw;
    margin-left: 2vw;
    width: 10vw
  }
`

const Navbar = () => (
  <NavWrapper>
    <ul>
      <li>
        <img src={keys} 
        id='crossedkeysLogo'
        />
      </li>
      <ListLink to='/about' text='About'/>
      <ListLink to='/blog' text='Blog'/>
      <ListLink to='/projects' text='Projects'/>
      <ListLink to='/resume' text='Resume'/>
    </ul>
  </NavWrapper>
)

export default Navbar
