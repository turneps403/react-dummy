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
                loader: "babel-loader"
                // ,
                // options:{
                //     presets:[ "@babel/preset-react"]
                // }
            }
        ]
    }
}
