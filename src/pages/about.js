import React, { Fragment } from 'react'
import SEO from '../Components/SEO'

// Sub-components
import styled from 'styled-components'
import Layout from '../components/Layout'

// Images and styling
import aboutBackgroundImg from '../images/chuttersnap-793576-unsplash.jpg'

const AboutPage = () => (
    <>
        <SEO title="Home" keywords={['blog', 'software', 'creative', 'writing', 'engineer', 'developer', 'programming']} />
        <Layout>
            <img src={aboutBackgroundImg} alt='An antique Imperial brand typewriter'/>
        </Layout>
    </>
)

export default AboutPage