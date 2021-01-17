// Libraries
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

// Styling
import "../scss/main.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div>
      <div className={"header"}>
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link to="/" className={"headerTitle"}>
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.name} className={"headerItem"} >
                  <Link to={link.link} className={"headerLink"}>
                    {link.name}
                  </Link>
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