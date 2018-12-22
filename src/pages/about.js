import React, { Fragment } from 'react'
import SEO from '../Components/SEO'
import { Link } from 'gatsby'

// Sub-components
import Navbar from '../Components/Navbar'
import styled from 'styled-components'

// Images and styling
import aboutBackgroundImg from '../images/chuttersnap-793576-unsplash.jpg'

const AboutPage = () => (
    <>
        <SEO title="Home" keywords={['blog', 'software', 'creative', 'writing', 'engineer', 'developer', 'programming']} />
        <Navbar />
        <img src={aboutBackgroundImg} alt='An antique Imperial typewriter'/>
        
    </>
)

export default AboutPage