const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'password-strength-meter.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};