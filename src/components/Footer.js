import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    background-color: light-grey;
    width: 100vw;
`

const { footerLinks } = props.siteConfig

const Footer = () => (
    <>
        {props.children}
    </>
)

export default Footer