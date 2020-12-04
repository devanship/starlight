import React from "react"
import { graphql } from "gatsby"
import Layout from "./../components/layout"

const MenusPage = ({ data }) => (
  <Layout>
    {data.allStrapiMenu.edges.length === 0 ? <h2>Menu Coming Soon!</h2> : <></>}
  </Layout>
)

export const query = graphql`
  query MenuQuery {
    allStrapiMenu {
      edges {
        node {
          id
          Item
          Price
        }
      }
    }
  }
`

export default MenusPage