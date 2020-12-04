import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"

const LateNightHappyHour = () => (
  <div className="uk-grid uk-child-width-expand@s">
    <StaticQuery
      query={graphql`
        {
          allStrapiLateNightHappyHour {
            edges {
              node {
                id
                startTime
                endTime
                days
                price
                items
              }
            }
          }
        }
      `}
      render={data =>
        data.allStrapiLateNightHappyHour.edges.map((lnhh, i) => {
          return (
            <div
              className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
              uk-card-default
            >
              <div className="uk-card-body">
                <div className="hours-grid">
                  <div className="uk-grid-medium" uk-grid>
                    <span className="uk-text-large days">Every Night</span>
                    <span className="uk-text-medium hours">
                      <span>
                        {moment(lnhh.node.startTime, "h:mm a").format("LT")} -{" "}
                      </span>
                      <span>
                        {moment(lnhh.node.endTime, "h:mm a").format("LT")}
                      </span>
                    </span>
                    <p>{lnhh.node.price}</p>
                  </div>
                </div>
                <hr class="uk-divider-icon"></hr>
                {lnhh.node.items}
              </div>
            </div>
          )
        })
      }
    />
  </div>
)

export default LateNightHappyHour
