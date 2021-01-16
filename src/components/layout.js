// Libraries
import * as React from "react"

// Assets
import "../scss/main.scss"

const Layout = ({children}) => {
  return (
    <main className={'pageStyles'}>
      {children}
    </main>
  )
}

export default Layout