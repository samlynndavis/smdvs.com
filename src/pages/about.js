import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title="About" />
                <h1>About</h1>
                <p>My name is Sam Davis and I am a full-stack web developer.</p>
                <p><Link to="/contact">Want to reach out?</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage