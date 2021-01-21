import React, { Component, Fragment } from "react"

// Components
import Layout from "../components/layout"
import Hours from "../components/hours"

// Images
import home from "./../images/home.jpg"
import menus from "./../images/menus.jpg"
import hours from "./../images/hours.jpg"

class IndexPage extends Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Fragment>
          <div
            className="uk-section uk-section-default uk-background-cover index-page-hero"
            uk-height-viewport="offset-bottom: 9"
            style={{ backgroundImage: `url(${home})` }}
          >
            <div className="uk-container">
              <div className="uk-overlay uk-overlay-default uk-position-center uk-text-center index-page-overlay">
                <h3 className="index-page-hero_welcome">Welcome to</h3>
                <h1 className="uk-heading-line index-page-hero_starlight">
                  <span>The Starlight</span>
                </h1>
                <p className="uk-text-italic index-page-hero_adderess-phone">
                  596 Grand Street, Brooklyn, NY 11211 - 718.486.3700
                </p>
                <p className="">
                  ***Temporarily closed due to COVID***
                </p>
              </div>
            </div>
          </div>

          <div className="uk-grid uk-child-width-expand@s uk-margin-remove-top index-page-body">
            <div
              className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
              uk-card-default
            >
              <div className="uk-card-body">
                <Hours />
                <p className="uk-text-italic">Kitchen closes one hour prior.</p>
              </div>
            </div>
            <div
              className="uk-background-cover uk-height-large uk-inline"
              style={{ backgroundImage: `url(${hours})` }}
            >
              <div className="uk-overlay uk-overlay-default uk-position-center title-page-overlay">
                <h1 className="uk-text-center">Hours</h1>
              </div>
            </div>
          </div>

          <div className="uk-grid uk-child-width-expand@s uk-margin-remove-top index-page-body">
            <div
              className="uk-background-cover uk-height-large uk-inline"
              style={{ backgroundImage: `url(${menus})` }}
            >
              <div className="uk-overlay uk-overlay-default uk-position-center title-page-overlay">
                <h1 className="uk-text-center">Location</h1>
              </div>
            </div>
            <div
              className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle uk-height-large index-page-address"
              uk-card-default
            >
              <div className="uk-card-body">
                <p className="uk-text-large">
                  596 Grand Street, <br /> Brooklyn, NY 11211 <br /> 718.486.3700
                </p>
                <div className="index-page-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3213787525474!2d-73.95026668442556!3d40.71094117933206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2595803fa8b79%3A0xdbb49488dfd13fcf!2s596%20Grand%20St%2C%20Brooklyn%2C%20NY%2011211!5e0!3m2!1sen!2sus!4v1603234831151!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </Layout>
    )
  }
}

export default IndexPage
