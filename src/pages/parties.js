import React from "react";
import Layout from "../components/layout";
import EventList from "../components/eventlist";
import parties from "./../images/parties.jpg";

const PartiesPage = () => (
  <Layout>
    <div className="uk-section">
      <div className="uk-container uk-container-xsmall parties-page">
      <div className="uk-text-center contact-page_heading">
          <h1 className="uk-text-center">Contact Us About Your Private Event</h1>
          <hr className="uk-divider-icon"></hr>
          <p>Want to have your party here? Bring at least 10 people and we will set you up with balloons and complimentary nachos! Email us to confirm. For all inquiries, please fill out the form below and we’ll be in touch soon.</p>
        </div>

        <form className="uk-form">
          <div className="uk-margin">
            <input class="uk-input" type="text" placeholder="Email" />
          </div>
          <div className="uk-margin">
            <input class="uk-input" type="text" placeholder="First Name" />
          </div>
          <div className="uk-margin">
            <input class="uk-input" type="text" placeholder="Last Name" />
          </div>
          <div className="uk-margin">
            <input class="uk-input" type="text" placeholder="Phone Number" />
          </div>
          <div className="uk-margin">
            <input class="uk-input" type="text" placeholder="Company" />
          </div>
          <div className="uk-margin uk-flex" uk-grid>
            <div className="uk-width-1-2 left">
              <select className="uk-select">
                <option>Event Date</option>
                <option></option>
              </select>
            </div>
            <div className="uk-width-1-2">
              <select className="uk-select">
              <option>Time</option>
              <option>11:00 PM</option>
              <option>10:30 PM</option>
              <option>10:00 PM</option>
              <option>9:30 PM</option>
              <option>9:00 PM</option>
              <option>8:30 PM</option>
              <option>8:00 PM</option>
              <option>7:30 PM</option>
              <option>7:00 PM</option>
              <option>6:30 PM</option>
              <option>6:00 PM</option>
              <option>5:30 PM</option>
              <option>5:00 PM</option>
              <option>4:30 PM</option>
              <option>4:00 PM</option>
              <option>3:30 PM</option>
              <option>3:00 PM</option>
              <option>2:30 PM</option>
              <option>2:00 PM</option>
              <option>1:30 PM</option>
              <option>1:00 PM</option>
              <option>12:30 PM</option>
              <option>12:00 PM</option>
              <option>11:00 AM</option>
              <option>10:30 AM</option>
              <option>10:00 AM</option>
              <option>9:30 AM</option>
              <option>9:00 AM</option>
              <option>8:30 AM</option>
              <option>8:00 AM</option>
              <option>7:30 AM</option>
              <option>7:00 AM</option>
            </select>
            </div>
          </div>
          <div className="uk-margin uk-flex" uk-grid>
            <div class="uk-width-1-2 left">
              <select class="uk-select">
                <option>Type of Event</option>
                <option>Alumni</option>
                <option>Bachelor/Bachelorette</option>
                <option>Birthday</option>
                <option>Cocktail Reception</option>
                <option>Corporate Lunch</option>
                <option>Engagement</option>
                <option>Fundraiser</option>
                <option>Graduation</option>
                <option>Holiday</option>
                <option>Meeting/Presentation</option>
                <option>Photo/Film Shoot</option>
                <option>Private Dinner</option>
                <option>Rehearsal Dinner</option>
                <option>Shower</option>
                <option>Sporting Event</option>
                <option>Wedding</option>
                <option>Other</option>
              </select>
            </div>
            <div class="uk-width-1-2">
              <input class="uk-input" type="text" placeholder="Number of People"/>
            </div>
          </div>
          <div className="uk-margin">
            <textarea className="uk-textarea" type="text" placeholder="Additional Information"/>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary order-nav-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)
export default PartiesPage