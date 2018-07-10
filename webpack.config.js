//относительный путь, нужен только в output
const path = require("path");

const conf = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        publicPath: "dist"
    },
    devServer: {
        overlay: true
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: '/node-modules'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: '/node-modules'
            }
        ]
    }
}

module.exports = (env, options ) => {
    let production = options.mode === "production";
    conf.devtool = production ? false : "eval-sourcemap"
    return conf;
}