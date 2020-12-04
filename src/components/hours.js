import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"

const Hours = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiHour {
          edges {
            node {
              id
              day
              opening
              closing
            }
          }
        }
      }
    `}
    render={data =>
      data.allStrapiHour.edges.map((hour, i) => {
        return (
          <div key={hour.node.strapiId} className="hours-grid">
            <div className="uk-grid-medium" uk-grid>
              <span className="uk-text-large days">{hour.node.day}</span>
              <span className="uk-text-medium hours">
                <span>{moment(hour.node.opening).local().format(`hA`)}</span>
                <span>
                  {moment(hour.node.closing).local().format(`[ - ]hA`)}
                </span>
              </span>
            </div>
            <hr class="uk-divider-icon"></hr>
          </div>
        )
      })
    }
  />
)

export default Hours
