// Libraries
import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Styling
import "../scss/main.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
      <div className={"header"}>
        <h1 style={{ margin: 0, flex: 1 }}>
          <AniLink cover to="/" bg="#FFFFFF" className={"headerTitle"}>
            {siteTitle}
          </AniLink>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.name} className={"headerItem"} >
                  <AniLink cover to={link.link} bg="#FFFFFF" className={"headerLink"}>
                    {link.name}
                  </AniLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header