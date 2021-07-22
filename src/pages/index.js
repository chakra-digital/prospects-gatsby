import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

import "../styles/home.css"

const Home = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Your agency for perfomant web, based in Austin</p>
          <p>
            {title} _ {description}
          </p>
          <Link className="btn" to="/projects">
            Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
