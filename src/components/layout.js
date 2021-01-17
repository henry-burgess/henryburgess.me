// Libraries
import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

// Components
import Header from "./header"

// Assets
import "../scss/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
              menuLinks {
                  name
                  link
              }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'title'}
          meta={[
            { name: 'description', content: 'Landing page of portfolio for Henry Burgess' },
            { name: 'keywords', content: 'gatsby, development, porfolio' },
          ]}
        >
        </Helmet>
        <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <main className={'pageStyles'}>
          <div className={'innerPage'}>
            {children}
          </div>
        </main>
      </React.Fragment>
    )}
  />
)

export default Layout