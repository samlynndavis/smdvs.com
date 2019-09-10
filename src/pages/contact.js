import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h2>Get In Touch!</h2>
                <li><a href="https://www.instagram.com/samlynndavis">Instagram</a></li>
                <li><a href="https://www.twitter.com/samueldavis" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="mailto:hello@smdvs.com">Email</a></li>
            </Layout>
        </div>
    )
}

export default ContactPage