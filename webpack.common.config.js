module.exports = {
     entry: './src/js/spinner.js',
     output: {
         path: './dist/js',
         filename: 'spinner.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel', // 'babel-loader' is also a valid name to reference
              query: {
                presets: ['es2015']
              }
         }]
     },
     plugins: []
 }
