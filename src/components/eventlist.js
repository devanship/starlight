import React from "react"
import { StaticQuery, graphql } from "gatsby"
import moment from "moment"

const EventList = () => (

  <div className="uk-grid uk-child-width-expand@s">

    <StaticQuery
      query={graphql`
      {
        allStrapiSpecial {
          edges {
            node {
              desc
              display
              strapiId
              title
              startTime
              endTime
            }
          }
        }
      }
    `}


      render={data =>
        data.allStrapiSpecial.edges.map((event, i) => {
          return (    
          <li key={event.node.strapiId}>
              <div className="uk-card uk-text-center uk-flex uk-flex-center uk-flex-middle" uk-card-default>
                <div className="uk-card-header">
                  <div class="uk-grid-small uk-flex uk-flex-middle" uk-grid>
                    <div className="uk-width-auto">
                    </div>
                    <div class="uk-width-expand">
                      <h3 class="uk-card-title uk-margin-remove-bottom">{event.node.title}</h3>
                      <p class="uk-text-meta uk-margin-remove-top"><span>{moment(event.node.startTime).local().format(`dddd[, ]`)}</span>
                        <span>{moment(event.node.startTime).local().format(`MMMM Do[,] YYYY`)}</span>
                        <br />
                        <span>{moment(event.node.startTime).local().format(`[From ] h:mma[ ]`)}</span>
                        <span>{moment(event.node.endTime).local().format(`[to ] h:mma[ ]`)}</span></p>
                    </div>
                  </div>
                </div>
                <div className="uk-card-body">
                  <p>{event.node.desc}</p>
                </div>
              </div>

            </li>
          )
        })
      }
    />
  </div>

)

export default EventList