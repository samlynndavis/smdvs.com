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
                <h2>Articles</h2>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <p className={blogStyles.blogDetails}>{edge.node.publishedDate}</p> 
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