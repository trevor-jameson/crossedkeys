import React, { Fragment } from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import siteConfig from '../../siteConfig'

const GlobalStyle = styled.div`
    margin: 0 auto;
    maxWidth: 650;
    padding: 0 1rem;
`

const Layout = ({ children }) => (
    <>
    <GlobalStyle>
        <Navbar />
        {children}
    </GlobalStyle>
    </>
)

export default Layout