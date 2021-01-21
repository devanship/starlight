import React from "react"
import PropTypes from "prop-types"
import background from "./../images/background.png"

import Nav from "./nav"
import Seo from "./seo"
import Footer from "./footer"
import '../assets/styles/main.scss'
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main style={{backgroundImage: `url(${background})`, minHeight: "100vh"}}>
       <Nav />
        {children}
      <a href="" uk-totop></a>
      </main>
      {/* <Footer/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout