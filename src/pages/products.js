import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductsPage = ({data}) => (
  <Layout>
    <SEO title="Products" />
    <h2>Products</h2>
    {
      data.allMarkdownRemark.edges.map(product => (
          <div key={product.node.id}>
              <h3>{product.node.frontmatter.title}</h3>
              <Link to={product.node.frontmatter.path}>Find more...</Link>
              <br />
              <hr />
          </div>
      ))  
    }
  </Layout>
)

export const productQuery = graphql`
    query ProductIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }
`

export default ProductsPage
