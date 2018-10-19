const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    ["css-loader", { sourceMap: true }],
                    ["sass-loader", { sourceMap: true }]
                ],
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};