const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets: [
                        "@babel/preset-env", 
                        ["@babel/preset-react", {"runtime": "automatic"}]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
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
