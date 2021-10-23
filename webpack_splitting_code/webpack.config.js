const path = require("path");
module.exports = {
    mode: "development",
    // splitting code:
    entry: {
        // 1 => Entry Points:
        index: './src/index.js',
        other: './src/other_module.js',
        // 2 => Entry dependencies:
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared',
        // },
        // other: {
        //     import: './src/other_module.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // 3 => SplitChunksPlugin:
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}