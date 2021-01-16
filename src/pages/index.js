// Libraries
import * as React from "react"

// Assets
import ProfileImage from "../assets/Memoji.png"
import Layout from "../components/layout"
import "../scss/main.scss"

const IndexPage = () => {
  return (
    <Layout>
      <title>Henry Burgess</title>

      <h1 className={'headingStyles'}>
        Hi!
        <br />
        <span className={'headingAccentStyles'}>I'm Henry.</span>
      </h1>

      <div className={'introDivStyles'}>
        <img src={ProfileImage} alt='Henry Burgess' className={'profileStyles'}></img>
        <h2 className={'introHeadingStyles'}>
          I'm a Software Engineering student at the University of Queensland. 
        </h2>
        <p className={'introParagraphStyles'}>
          I have experience developing software that helps people stay safe, learn more about our body, and study the health of the land we live in!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
