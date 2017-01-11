/**
 * Created by pdog on 2017/1/3.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    less: 'vue-style-loader!css-loader!less-loader' // <style lang="less">
                }
            }

        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    /*vue: {
        //好像说是
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            // you can also include <style lang="less"> or other langauges
            less: ExtractTextPlugin.extract("css!less")
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ],*/
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
