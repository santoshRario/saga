const path = require('path')

const webBuildTargetFolder = path.join(__dirname, 'public')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src'),
  },
  resolve: { extensions: ['.js', '.ts'] },
  output: {
    path: webBuildTargetFolder,
    filename: targetServiceWorkerFilename,
  },
  plugins: [],
}