import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout imageUrl={frontmatter.imageUrl}>
      <div>
        <AniLink cover to="/blog">back to blog</AniLink>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageUrl
      }
    }
  }
`