import React, { Fragment } from 'react'
import SEO from '../components/seo'

// Sub-components
import Navbar from '../components/navbar'
import styled from 'styled-components'

// Images and styling
import splashBackgroundImg from '../images/billy-huynh-278252-unsplash.jpg'

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
    z-index: -1;
`

const IndexPage = () => (
    <>
        <SEO title="Home" keywords={['blog', 'software', 'creative', 'writing', 'engineer', 'developer', 'programming']} />
        <Navbar />
        <div id='splashBackground'>
            <SplashHeader>
                <h1>Trevor Jameson</h1>
                <h1>Coder. Writer. Collaborator.</h1>
            </SplashHeader>
            <img src={splashBackgroundImg} alt='A shimmering cloud of red and blue glitter'/>
        </div>
    </>
)

export default IndexPage
