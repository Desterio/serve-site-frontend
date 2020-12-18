const withCSS = require('@zeit/next-css')
// import withCSS from '@zeit/next-css';

// export default withCSS({
//     webpack: (config, { isServer }) => {
//         // Fixes npm packages that depend on `fs` module
//         if (!isServer) {
//             config.node = {
//                 fs: 'empty'
//             }
//         }
//
//         return config
//     }
// });

module.exports = withCSS({
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    }
});