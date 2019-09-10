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
          <ul className={footerStyles.footerNavList}>
            <li>
              <a href="#">Patreon</a>
            </li>
            <li>
              <a href="#">RSS</a>
            </li>
          </ul>
        </nav>
        </footer>
    )
}

export default Footer