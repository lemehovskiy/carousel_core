module.exports = {
    watch: true,
    entry: './src/index.es6',
    output: {
        filename: 'build/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
    // resolve: {
    //     alias: {
    //         jquery: "jquery/src/jquery"
    //     }
    // }
};