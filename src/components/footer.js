import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
    
    return (
        <footer className={footerStyles.footer}>
        <nav>
          <ul className={footerStyles.socialNavList}>
            <li>
              <p>Social</p>
            </li>
            <li>
              <a href="https://www.twitter.com/samueldavis" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/samlynndavis" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.github.com/samlynndavis" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/samlynndavis/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <ul className={footerStyles.socialNavList}>
            <li>
              <p>Hire Me</p>
            </li>
            <li>
              <a href="mailto:hello@smdvs.com">
                hello@smdvs.com
                </a>
            </li>
          </ul>
          <ul className={footerStyles.socialNavList}>
            <li>
              <p>CV</p>
            </li>
            <li className={footerStyles.resume}>
              <a href="https://drive.google.com/file/d/1ec0MDvIWBfxIAS3qWHkA9qojRVXuvhnM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
        <p className={footerStyles.copyright}>@2020 Samuel Lynn Davis.</p>
        </footer>
    )
}

export default Footer