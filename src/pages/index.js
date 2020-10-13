import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <div id="netflify-modal">Login</div>
    <p>
      <Link to="/color/">Color</Link>
      <br />
      <Link to="/typography/">Typography</Link>
      <br />
      <Link to="/preview">Style Guide Components</Link>
    </p>
  </Layout>
)

export default IndexPage