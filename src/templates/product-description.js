import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

export default function Template ({data}) {
    const product = data.markdownRemark;

    return (
        <div>
            <Link to="/products">Go back</Link>
            <hr />
            <h1>{product.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: product.html }} />
        </div>
    )
}

export const productQuery = graphql`
    query ProductDescriptionByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
