import React from 'react'
import { Link } from 'gatsby'


import Layout from '../components/layout'
import Head from '../components/head'

import layoutStyles from '../components/layout.module.scss'

const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home" />
            <h1 className={layoutStyles.hero}><span className={layoutStyles.bold}>Hi.</span> I'm a <span className={layoutStyles.title}>front-end engineer</span> and <span className={layoutStyles.title}>visual artist</span> born, raised, and currently based in Chicago, Illinois.</h1>
        </Layout>
    )
}

export default IndexPage