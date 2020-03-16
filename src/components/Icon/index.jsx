import React from "react"
import { string } from "prop-types"

import Github from "./Github"
import Linkedin from "./Linkedin"
import Twitter from "./Twitter"

const Icon = ({ name }) => {
  switch (name) {
    case "Github":
      return <Github />
    case "Linkedin":
      return <Linkedin />
    case "Twitter":
      return <Twitter />
    default:
      return ""
  }
}

Icon.propTypes = {
  name: string.isRequired,
}

export default Icon
