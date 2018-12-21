import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


import keys from '../images/crossedkeys.png'

const NavWrapper = styled.div`

  li a {
    color: black;
    text-decoration: none;
    display: block;
    text-align: center;
    width: 75px;
  }

  li {
    float: left;
  }

  ul {
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  #crossedkeysLogo {
    width: 10vw
  }

  .navbar {
    background: '#70c1b3';
    margin-bottom: '1.45rem';
  }
`

const Navbar = ({ siteTitle }) => (
  <NavWrapper>
    <ul>
      <li>
        <img src={keys} id='crossedkeysLogo'/>
      </li>
      <li>
        <h4>
          <Link
            to="/about"
          >
            About
          </Link>
        </h4>
      </li>
      <li>
        <h4>
          <Link
            to="/blog"
          >
            Blog
          </Link>
        </h4>
      </li>
      <li>
        <h4>
          <Link
            to="/projects"
          >
            Projects
          </Link>
        </h4>
      </li>
      <li>
        <h4>
          <Link
            to="/contact"
          >
            Contact
          </Link>
        </h4>
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
