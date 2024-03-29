module.exports = {
    siteMetadata: {
        title: `Daisy Buchanan`,
        siteUrl: `https://buchanan.gatsbyjs.io/`
    },
    plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "blog",
            "path": "./src/blog/",
        }
    }]
};