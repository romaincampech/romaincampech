import React from "react"
import styled from "styled-components"
import { socials } from "../config"
import { mixins } from "../styles"
import Icon from "./Icon"

const SocialsContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 50px;
`

const SocialsList = styled.ul`
  &:after {
    content: "";
    display: block;
    height: 50px;
  }
  li {
    margin: 10px 0;
  }
`

const SocialLink = styled.a`
  opacity: 0.4;
  svg {
    height: 20px;
    width: 20px;
    transition: all 0.1s ease-in;
  }
  &:hover {
    opacity: 1;
    svg {
      transform: translateY(-3px);
      transition: all 0.1s ease-in;
    }
  }
`

const Socials = () => (
  <SocialsContainer>
    <SocialsList>
      {socials.map(({ name, url }, i) => (
        <li key={i}>
          <SocialLink
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={name}
          >
            <Icon name={name} />
          </SocialLink>
        </li>
      ))}
    </SocialsList>
  </SocialsContainer>
)

export default Socials
