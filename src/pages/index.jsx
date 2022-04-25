// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this cool site with the Gatsby tutorial.</p>
      <StaticImage
        alt="The Great Apes by Will Self"
        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328466300l/1304690.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage