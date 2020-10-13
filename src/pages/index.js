import React from "react"
import { Link } from "gatsby"

const netlifyIdentity = require('netlify-identity-widget');
import netlifyIdentity from 'netlify-identity-widget';
import Layout from "../components/layout"
// import Image from "../components/image"

// netlifyIdentity.init({
//   container: '#netlify-modal', // defaults to document.body
//   locale: 'en' // defaults to 'en'
// });


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