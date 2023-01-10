const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output:{
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module:{
        rules:[
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            progress: true,
        },
        compress: false,
        port: 3000,
        hot: true,
        open: true
    }
}
