const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./src/app.js", // входная точка - исходный файл
    output:{
        publicPath: "/public/",
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
//     devServer: {
//      historyApiFallback: true,
//      static: {
//       directory: path.join(__dirname, "/"),
//     },
//      port: 8081,
//      open: true
//    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader"
                // ,   // определяем загрузчик
                // options:{
                //     presets:[ "@babel/preset-react"]    // используемые плагины
                // }
            }
        ]
    }
}
