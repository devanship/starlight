import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"

const HappyHour = () => (
  <div className="uk-grid uk-child-width-expand@s">
    <StaticQuery
      query={graphql`
        {
          allStrapiHappyHour {
            edges {
              node {
                id
                startTime
                endTime
                days
                price
                meals
              }
            }
          }
        }
      `}
      render={data =>
        data.allStrapiHappyHour.edges.map((hh, i) => {
          return (
            <div
              className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle"
              uk-card-default
            >
              <div className="uk-card-body">
                <div className="hours-grid">
                  <div className="uk-grid-medium" uk-grid>
                    <span className="uk-text-large days">{hh.node.days}</span>
                    <span className="uk-text-medium hours">
                      <span>Open - </span>
                      <span>
                        {moment(hh.node.startTime, "h:mm a").format("LT")}
                      </span>
                    </span>
                    <p>{hh.node.price}</p>
                  </div>
                </div>
                <hr class="uk-divider-icon"></hr>
                {(hh.node.meals.split(",")).map((m, i) => {
                  return (<div>{m}</div>)
                })}
              </div>
            </div>
          )
        })
      }
    />
  </div>
)

export default HappyHour
