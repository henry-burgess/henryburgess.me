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
            },
            {
                name: 'blog',
                link: '/blog'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/articles`,
                name: `articles`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Henry Burgess`,
                short_name: `Henry Burgess`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#1E91D6`,
                display: `standalone`,
                icon: `src/assets/Memoji.png`,
            }
        }
    ],
}