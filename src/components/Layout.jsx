import React from "react"
import { node } from "prop-types"
import styled from "styled-components"
import { GlobalStyle } from "../styles"
import Socials from "./Socials"

const LayoutContainer = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyle />
    {children}
    <Socials />
  </LayoutContainer>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
