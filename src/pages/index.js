import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'

import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Samuel Lynn Davis - Visual Artist and Web Developer" />
            <h1 className={layoutStyles.hero}>I'm a Chicago-based freelance developer and <a className={layoutStyles.accent} href="https://www.samlynndavis.com" target="_blank" rel="noopener noreferrer" >visual artist</a> specializing in motion and interaction. This is a home for the <Link className={layoutStyles.accent} to="/projects">things I've built</Link>, and the processes behind them. I'm currently <a href="mailto:hello@smdvs.com" className={`${layoutStyles.accent} ${layoutStyles.available}`}>available</a> for freelance development projects.</h1>
        </Layout>
    )
}

export default IndexPage