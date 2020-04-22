import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

import blogStyles from './blog.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {  
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }   
    `)
    return (
        <div>
            <Layout>
                <Head title="Writing - Samuel Lynn Davis" />
                <div className={blogStyles.subheading}>
                    <p>In an effort to get more comfortable documenting my process and "learning in public," from time to time I'll post my thoughts and musings on new tech and the state of the industry. This is where you'll find them.</p>
                </div>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <p className={blogStyles.blogDetails}>{edge.node.publishedDate}</p>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h3 className={blogStyles.blogTitle}>{edge.node.title}</h3>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage