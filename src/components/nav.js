import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Strapi Blog</Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <StaticQuery
              query={graphql`
                query {
                  allStrapiEvent {
                    edges {
                      node {
                        strapiId
                        title
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiEvent.edges.map((event, i) => {
                  return (
                    <li key={event.node.strapiId}>
                      <Link to={`/event/${event.node.strapiId}`}>
                        {event.node.title}
                      </Link>
                    </li>
                  )
                })
              }
            />
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav