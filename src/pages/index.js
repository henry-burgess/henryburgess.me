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
      <div className={'introDivStyles'}>
        <h1 className={'headingStyles'}>
          Hi, I'm Henry <span role="img" aria-label="Waving Emoji">👋</span>
        </h1>
        <img src={ProfileImage} alt='Henry Burgess' className={'profileStyles'}></img>
        <h2 className={'introHeadingStyles'}>
          A <span className={'emphasisPrimary'}>Software Engineering</span> student at the <span className={'emphasisPrimary'}>University of Queensland</span>. 
        </h2>
        <p className={'introParagraphStyles'}>
          I've built web apps that help people stay safe, study the brain, and protect the Great Barrier Reef!
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
