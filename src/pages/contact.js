import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Get In Touch!</h1>
                <li><a href="https://www.instagram.com/samlynndavis">Instagram</a></li>
                <li><a href="https://www.twitter.com/samueldavis" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:hello@smdvs.com">Email</a></li>
            </Layout>
        </div>
    )
}

export default ContactPage