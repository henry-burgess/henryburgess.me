module.exports = {
    siteMetadata: {
        title: 'Henry Burgess',
        menuLinks: [
            {
                name: 'home',
                link: '/'
            },
            {
                name: 'projects',
                link: '/projects'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`
    ],
}