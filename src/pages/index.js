import * as React from "react"
import ProfileImage from '../assets/Profile.png'

const accent = "#26DBBD"

// styles
const pageStyles = {
  color: "#232129",
  padding: "5vw 10vw 5vw 10vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: accent,
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#1ba68f",
}
const profileStyles = {
  borderRadius: "50%",
  width: "10vw",
  padding: "1vw 1vw 1vw 1vw",
}
const introDivStyles = {
  backgroundColor: accent,
  padding: "2vw 1vw 2vw 1vw",
}
const introHeadingStyles = {
  marginTop: 20,
  marginBottom: 32,
  color: "#FFFFFF",
}
const introParagraphStyles = {
  color: "#FFFFFF",
  marginBottom: 20,
}

// data
const links = [
  {
    text: "Twitter",
    url: "https://www.twitter.com/henryjburg/",
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

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Henry Burgess</title>

      <h1 style={headingStyles}>
        Hi!
        <br />
        <span style={headingAccentStyles}>I'm Henry.</span>
      </h1>

      <div style={introDivStyles}>
        <img src={ProfileImage} alt='Henry Burgess' style={profileStyles}></img>
        <h2 style={introHeadingStyles}>
          I'm a Software Engineering student at the University of Queensland. 
        </h2>
        <p style={introParagraphStyles}>
          I have experience developing software that helps people stay safe, learn more about our body, and study the health of the land we live in!
        </p>
      </div>

      <br />

      <h1 style={headingStyles}>
        Projects
      </h1>
      <h2 style={headingStyles}>
        Raspberry Pi guitar effects
      </h2>
      <p style={paragraphStyles}>
        I used my Raspberry Pi to process audio input and apply various effects using the open-source Guitarix and JACK software. I've put some code on <a href='https://github.com/henry-burgess/rpi-guitar-fx'>GitHub</a> that allows you to use two push-buttons to cycle the active Guitarix preset. You can read the entire process in the article I wrote on <a style={linkStyles} href='https://henryjburg.medium.com/guitar-effects-using-a-raspberry-pi-b24d39489a89'>Medium</a>.
      </p>

      <h1 style={headingStyles}>
        Contact
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li style={listItemStyles}>
            <a
              style={linkStyles}
              href={`${link.url}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
