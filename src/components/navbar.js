import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import '../styling/navbar.css'
import keys from '../images/crossedkeys.png'

const Navbar = ({ siteTitle }) => (
  <div
    style={{
      background: '#000',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
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
    </div>
  </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: '',
}

export default Navbar
