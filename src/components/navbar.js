import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


import keys from '../images/crossedkeys.png'

const NavWrapper = styled.div`

  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  background-color: #06081E;
  width: 100vw;



  li a {
    color: black;
    text-decoration: none;
    display: block;
    text-align: center;
    width: 10vw;
    color: white;
    font-size: 1.5em;
  }

  li {
    float: left;
    margin-left: 5vw;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  #crossedkeysLogo {
    margin-top: 1.5vw;
    width: 12vw
  }
`

const Navbar = ({ siteTitle }) => (
  <NavWrapper>
    <ul>
      <li>
        <img src={keys} id='crossedkeysLogo'/>
      </li>
      <li>
        <p>
          <Link
            to="/about"
          >
            About
          </Link>
        </p>
      </li>
      <li>
        <p>
          <Link
            to="/blog"
          >
            Blog
          </Link>
        </p>
      </li>
      <li>
        <p>
          <Link
            to="/projects"
          >
            Projects
          </Link>
        </p>
      </li>
      <li>
        <p>
          <Link
            to="/contact"
          >
            Contact
          </Link>
        </p>
      </li>
    </ul>
  </NavWrapper>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: '',
}

export default Navbar
