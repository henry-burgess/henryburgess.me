import * as React from "react"
import ProfileImage from '../assets/Profile.png'

// Accent colour
const accent = "#26DBBD"

// Page styling
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
        psygo
      </h2>
      <p style={paragraphStyles}>
        psygo aims to be a tool that streamlines creating plugins for the <a href='https://www.jspsych.org'>jsPsych</a> JavaScript library. 
        jsPsych can be used to create behavioural experiments that can be run through a web browser. 
        My project provides an easy method of setting up a development environment, testing the plugin, and eventually will support exporting any required files in 
        a format suitable for use on an administrative platform such as <a href='https://gorilla.sc'>Gorilla</a>.
        psygo will eventually be released as a Node JS-based CLI, and the source code is on my <a href='https://github.com/henry-burgess/psygo'>GitHub</a>.
      </p>

      <h2 style={headingStyles}>
        coinspotapi
      </h2>
      <p style={paragraphStyles}>
        This is an API wrapper written in Node.js for the Australian <a href='https://www.coinspot.com.au'>CoinSpot</a> cryptocurrency exchange.
        It will eventually provide access to all of the API functionality described in the CoinSpot API <a href='https://www.coinspot.com.au/api'>documentation</a> and is a work in progress.
        The source code is available publicly on <a href='https://github.com/henry-burgess/coinspotapi'>GitHub</a>, and the library can be installed by running <code>npm i @henryburgess/coinspotapi</code>.
      </p>

      <h2 style={headingStyles}>
        Raspberry Pi guitar effects
      </h2>
      <p style={paragraphStyles}>
        I used my Raspberry Pi to process audio input and apply various effects using the open-source Guitarix and JACK software. 
        I've put some code on <a href='https://github.com/henry-burgess/rpi-guitar-fx'>GitHub</a> that allows you to use two push-buttons to cycle the active Guitarix preset. 
        You can read the entire process in the article I wrote on <a style={linkStyles} href='https://henryjburg.medium.com/guitar-effects-using-a-raspberry-pi-b24d39489a89'>Medium</a>.
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
