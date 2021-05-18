import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const BlogPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Layout>
      <main className="d-flex flex-column align-items-center">
        {edges.map(({ node }, i) => (
          <div key={i} className="my-5">
            <Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={node.frontmatter.imageUrl} />
              <Card.Body>
                <Card.Title>{node.frontmatter.title} <small className="text-muted ">{node.frontmatter.date}</small></Card.Title>
                <Card.Text>
                  {node.excerpt}
                </Card.Text>
                <AniLink cover to={node.frontmatter.path} className="text-white">
                  <Button variant="primary">Read</Button>
                </AniLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            imageUrl
          }
        }
      }
    }
  }
`

export default BlogPage