// Libraries
import * as React from "react"

// Assets
import "../scss/main.scss"

// Social Media links
const links = [
  {
    text: "Twitter",
    url: "https://www.twitter.com/henryjburg/",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/henryjamesburgess/",
  },
  {
    text: "Medium",
    url: "https://henryjburg.medium.com",
  },
  {
    text: "GitHub",
    url: "https://www.github.com/henry-burgess",
  },
]

const Footer = () => {
  return (
    <ul className={'listStyles'}>
        {links.map(link => (
          <li className={'listItemStyles'}>
            <a
              className={'linkStyles'}
              href={`${link.url}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
  )
}

export default Footer
