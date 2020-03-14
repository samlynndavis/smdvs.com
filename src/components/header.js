import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Writing</Link>
                    </li>
                    <li className={headerStyles.name}>
                        <Link className={headerStyles.navItem } activeClassName={headerStyles.activeNavItem} to="/">{data.site.siteMetadata.title}</Link>
                    </li>
            <li className={headerStyles.nameMobile}>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">SLD</Link>
            </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header