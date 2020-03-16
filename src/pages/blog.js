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
                <h1 className={blogStyles.title}>Writing</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <Link to={`/blog/${edge.node.slug}`}>
                                <li className={blogStyles.post}>
                                    <p className={blogStyles.blogDetails}>{edge.node.publishedDate}</p> 
                                    <h3 className={blogStyles.blogTitle}>{edge.node.title}</h3>
                                </li>
                            </Link>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage