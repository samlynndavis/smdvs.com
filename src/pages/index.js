import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'

import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Samuel Lynn Davis - Visual Artist and Web Developer" />
            <h1 className={layoutStyles.hero}>My name is Sam. I'm a Chicago-based freelance developer and <a href="https://www.samlynndavis.com" target="_blank" rel="noopener noreferrer" ><span className={layoutStyles.job__title}>visual artist</span></a> specializing in motion and interaction.</h1>
            <h1 className={layoutStyles.hero}>This is a home for <Link className={layoutStyles.accent} to="#">things</Link> I've built, and the processes behind them.</h1>
            <h1 className={layoutStyles.hero}>I'm currently <a href="mailto:hello@smdvs.com" className={layoutStyles.accent}>available</a> for freelance development projects.</h1>
        </Layout>
    )
}

export default IndexPage