module.exports = {
  devtool: 'inline-source-map',
  entry: __dirname +'/src/main.ts',
  output: {
    path : __dirname,
    filename : 'dist/main.js' // here will the ES 5.1 code 
  },
  devServer : {
    inline : true, // if you see a file change (build, re run and re render)
    port : 3333
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension. 
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well 
  },
  module: {
    loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future 
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` 
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}