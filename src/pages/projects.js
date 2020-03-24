import React from 'react'
import Img from 'gatsby-image';

import projectStyles from './projects.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const ProjectPage = props => {
    return (
        <div>
            <Layout>
                <Head title="Projects - Samuel Lynn Davis" />
                <h1 className={projectStyles.title}>Projects</h1>
                <div className={projectStyles.subheading}>
                    <p>This is an ever-updating list of past and future involvements, projects, and sometimes a closer look at the processes behind them.</p>
                </div>
                <div className={projectStyles.projectWrapper}>
                    <div className={projectStyles.project}>
                                <h4>Web Design, Web Development</h4> 
                                <h3>From Chicago, With Love</h3>
                                  <div className={projectStyles.overlayWrapper}>
                                    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
                                    <div className={projectStyles.overlay}>
                                      <h1 className={projectStyles.overlayTitle}><a href="https://www.fromchiwithlove.com/" target="_blank" rel="noopener noreferrer" >Visit Site</a></h1>
                                    </div>
                                  </div>
                                <p>An interactive site celebrating and exploring the creative processes of five female Chicago creatives. Built with HTML, CSS (Tachyons), and Javascript, and employing the use of animation libraries like GSAP and ScrollMagic.</p>
                    </div>
                    <div className={projectStyles.project}>
                                <h4>Web Development, Wordpress</h4> 
                                <h3>Just The Beginning - A Pipeline Organization</h3>
                                <div className={projectStyles.overlayWrapper}>
                                    <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
                                    <div className={projectStyles.overlay}>
                                      <h1 className={projectStyles.overlayTitle}><a href="https://jtb.org/" target="_blank" rel="noopener noreferrer" >Visit Site</a></h1>
                                    </div>
                                  </div>
                                <p>Designed and built this Wordpress site for JTB.org, a non-profit specializing in educational programs for students interested in a career in law.</p>
                    </div>
                    <div className={projectStyles.project}>
                                <h4>Web Design, Web Development</h4> 
                                <h3>Chicago Tool Library x Moon Rise</h3>
                                <div className={projectStyles.overlayWrapper}>
                                    <Img fluid={props.data.imageThree.childImageSharp.fluid} />
                                    <div className={projectStyles.overlay}>
                                      <h1 className={projectStyles.overlayTitle}><a href="https://moonrise-ctl.netlify.com/" target="_blank" rel="noopener noreferrer" >Visit Site</a></h1>
                                    </div>
                                  </div>
                                <p>Designed and built the entirety of this small event landing page with Eventbrite ticketing integration in three days. Employed the use of OOCSS frameworks Tachyons and Basscss to aid in speeding up the development process. Site hosted on Netlify. </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export const query = graphql`
query {
    imageOne: file(relativePath: { eq: "images/fcwl_liz_featured_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageTwo: file(relativePath: { eq: "images/jtb_featured_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageThree: file(relativePath: { eq: "images/ctl_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default ProjectPage