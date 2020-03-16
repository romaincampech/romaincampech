import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const { colors, fonts, fontSizes } = theme

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;    
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.navy};
    color: ${colors.white};
    margin: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden; 
    font-family: ${fonts.Josefin};
    font-size: ${fontSizes.m};   
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0;
  } 

  a {
    color: inherit;
    text-decoration: none;
  }


  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    width: 100%;    
    vertical-align: middle;
  }  

  svg {
    height: 100%;
    width: 100%;    
    fill: currentColor;
    vertical-align: middle;    
  }
`

export default GlobalStyle
