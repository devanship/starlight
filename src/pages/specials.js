import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"
import Layout from "./../components/layout"
import Events from "./../components/eventlist"
import HappyHours from "./../components/happyhours"
import LateNightHappyHour from "./../components/latenighthappyhours"
import happyhour from "./../images/happyhour.jpg"
import menus from "./../images/menus.jpg"
import hours from "./../images/hours.jpg"
const SpecialsPage = () => (
  <Layout>
    <div className="uk-grid uk-child-width-expand@s uk-margin-remove-top index-page-body">
        <div
          className="uk-background-cover uk-height-large uk-inline"
          style={{ backgroundImage: `url(${happyhour})` }}
        >
          <div className="uk-overlay uk-overlay-default uk-position-center title-page-overlay">
            <h1 className="uk-text-center">Happy Hour</h1>
          </div>
        </div>
        <div
          className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
          uk-card-default
        >
          <div className="uk-card-body">
          <HappyHours />
          </div>
        </div>
    </div>

    <div className="uk-grid uk-child-width-expand@s uk-margin-remove-top index-page-body">
        <div
          className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
          uk-card-default
        >
          <div className="uk-card-body">
          <LateNightHappyHour />
          </div>
        </div>
        <div
          className="uk-background-cover uk-height-large uk-inline"
          style={{ backgroundImage: `url(${menus})` }}
        >
          <div className="uk-overlay uk-overlay-default uk-position-center title-page-overlay">
            <h1 className="uk-text-center">Late Night Happy Hour</h1>
          </div>
        </div>
    </div>

    <div className="uk-grid uk-child-width-expand@s uk-margin-remove-top index-page-body">
        <div
          className="uk-background-cover uk-height-large uk-inline"
          style={{ backgroundImage: `url(${hours})` }}
        >
          <div className="uk-overlay uk-overlay-default uk-position-center title-page-overlay">
            <h1 className="uk-text-center">Specials</h1>
          </div>
        </div>
        <div
          className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
          uk-card-default
        >
          <div className="uk-card-body">
          <Events />
          </div>
        </div>
    </div>
  </Layout>
)
export default SpecialsPage
