import React, { Fragment} from "react"
import { Link } from "gatsby"
import logo from "./../images/logo.png"
import Footer from "./footer"

const Nav = () => (
<Fragment>
<nav className="uk-navbar-container uk-navbar-sticky uk-navbar uk-box-shadow-small " uk-navbar uk-sticky="top:0" >
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link className="uk-logo" to="/">
            <img src={logo} alt="The Starlight" width="100" className="uk-blend-screen"/>
          </Link>
        </li>
      </ul>
    </div>

    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav uk-visible@s">
        <li>
          <Link to={"/menus"}>
            Menus
          </Link>
        </li>
        <li>
          <Link to={"/specials"}>
            Happy Hours and Specials
          </Link>
        </li>
        <li>
          <Link to={"/parties"}>
            Parties and Events
          </Link>
        </li>
        {/* <li>
          <Link to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="https://www.grubhub.com/restaurant/the-starlight-596-grand-st-brooklyn/327724?classicAffiliateId=%2Fr%2Fw%2F40339%2Frestaurant%2F327724">
            <button className="uk-button uk-button-primary order-nav-btn">Order Online</button>
          </Link>
        </li> */}
      </ul>
      <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-icon="icon: menu" uk-navbar-toggle-icon uk-toggle="target: #sidenav"></a>
    </div>
  </nav>

<div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
<div class="uk-offcanvas-bar">
  <a href="#" uk-icon="icon: arrow-right" uk-navbar-toggle-icon uk-toggle="target: #sidenav"></a>
    <ul className="uk-nav">
        <li>
          <Link to={"/menus"}>
            Menus
          </Link>
        </li>
        <li>
          <Link to={"/specials"}>
            Happy Hours and Specials
          </Link>
        </li>
        {/* <li>
          <Link to={"/parties"}>
            Parties and Events
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="https://www.grubhub.com/restaurant/the-starlight-596-grand-st-brooklyn/327724?classicAffiliateId=%2Fr%2Fw%2F40339%2Frestaurant%2F327724">
            <button className="uk-button uk-button-primary order-nav-btn">Order Online</button>
          </Link>
        </li> */}
    </ul>
</div>
</div>
</Fragment>
  

)

export default Nav