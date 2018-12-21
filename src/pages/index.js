import React, { Fragment } from 'react'
import SEO from '../components/seo'
import { Link } from 'gatsby'

// Sub-components
import Navbar from '../components/navbar'
import styled from 'styled-components'

// Images and styling
import splashBackgroundImg from '../images/billy-huynh-278252-unsplash.jpg'
import aboutMeFront from '../images/Trev-Click-Series2.jpg'
import aboutMeBack from '../images/Trev-Click-Series3.jpg'

const SplashHeader = styled.div`
    width: 100vw;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    margin-top: 15vw;

    h1 {
        font-size: 5vw;
        font-family: arial;
        color: white;
    }
    h1:first-child {
        font-size: 10vw;
    }
`

const SplashBackground = styled.div`
    img {
        object-fit: fill;
    }

`

const AboutMe = styled.div`
    margin-left: 50%;
    
    img {
        border-radius: 50%;
        height: 25vw;
        border-style: solid;
        border-width: 3px;
        position: absolute;
        margin-left: 5%
    }

    .hoverHide:hover {
        display: none;
    }
`

const IndexPage = () => (
    <>
        <SEO title="Home" keywords={['blog', 'software', 'creative', 'writing', 'engineer', 'developer', 'programming']} />
        <Navbar />
        <SplashHeader>
            <h1>Trevor Jameson</h1>
            <h1>Coder. Writer. Collaborator.</h1>
        </SplashHeader>
        <SplashBackground>
            <img src={splashBackgroundImg} alt='A shimmering cloud of red and blue glitter'/>
        </SplashBackground>
        <AboutMe>
            <img className='hoverHide' src={aboutMeFront} alt='Some dizzy dolt (the author) with eyes whipped sideways' />
            <img  src={aboutMeBack} alt='Ah! Who said you could hover on me'/>
        </AboutMe>
    </>
)

export default IndexPage
