import React from "react"
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout>
    <div className="uk-section">
      <div className="uk-container uk-container-xsmall contact-page">
        <div className="uk-text-center contact-page_heading">
          <h1 className="uk-text-center">Contact Us</h1>
          <hr className="uk-divider-icon"></hr>
          <p>Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at 718-486-3700. Looking forward to hearing from you</p>
        </div>

        <form className="uk-form">
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Name"/>
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Email"/>
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="Phone Number"/>
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="text" placeholder="What are you getting in touch about?"/>
          </div>
          <div className="uk-margin">
            <textarea className="uk-textarea" type="text" placeholder="Your Message"/>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary order-nav-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)
export default ContactPage