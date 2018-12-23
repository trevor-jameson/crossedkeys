import React, { Fragment } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'
import siteConfig from '../../siteConfig'

const GlobalStyle = styled.div`
    margin: 0 auto;
`

const Layout = ({ children }) => (
    <>
    <GlobalStyle>
        <Navbar />
        {children}
        <Footer />
    </GlobalStyle>
    </>
)

export default Layout