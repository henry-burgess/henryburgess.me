// Libraries
import * as React from "react"

// Assets
import "../scss/main.scss"

// Social Media links
const links = [
  {
    text: "twitter",
    url: "https://www.twitter.com/henryjburg/",
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/henryjamesburgess/",
  },
  {
    text: "medium",
    url: "https://henryjburg.medium.com",
  },
  {
    text: "github",
    url: "https://www.github.com/henry-burgess",
  },
]

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div>
        <ul style={{ display: "flex", flex: 1 }}>
            {links.map(link => (
              <li className={"footerItem"}>
                <a className={"footerLink"} href={`${link.url}`}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </footer>
  )
}

export default Footer
