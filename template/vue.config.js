// vue.config.js
module.exports = {
    publicPath: '',
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#007D71',
                    'link-color': '#007D71',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true
            },
            stylus: {}
        }
    },
    chainWebpack: config => {
        config.output.filename('js/[name].js').end();
        config.output.chunkFilename('js/[name].js').end();
        // config.plugin('extract-css').tap(args => [{
        //     filename: 'css/[name].css',
        //     chunkFilename: 'css/[name].css'
        // }])
    }
}