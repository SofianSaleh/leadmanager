module.exports ={
    module:{
        rules: [
            {
                include: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}