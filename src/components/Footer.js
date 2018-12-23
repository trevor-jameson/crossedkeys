import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import ListLink from './ListLink'

const FooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    background-color: grey;
    width: 100vw;
    opacity: 0.75;

    ul {
        display: block;
    }
`

const date = new Date
const year = date.getFullYear()


const Footer = () => (
    <FooterWrapper>
        <ul>
            <li>Copyright © {year}. Trevor Jameson. All Rights Reserved.</li>
        </ul>
    </FooterWrapper>
)

export default Footer