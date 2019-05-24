const Generator = require('yeoman-generator')

const DEPENDENCIES = [
  '@babel/polyfill',
  'connected-react-router',
  'history',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-dom',
  'redux',
  'redux-saga'
]

const DEV_DEPENDENCIES = [
  '@babel/core',
  '@babel/preset-env',
  '@babel/preset-react',
  '@types/react-dom',
  '@types/react-redux',
  '@types/react-router',
  '@types/react',
  'parcel-bundler',
  'redux-devtools-extension',
  'typescript'
]

module.exports = class extends Generator {
  initializing() {
    this.composeWith(require.resolve('generator-npm-init/app'), {
      license: 'UNLICENSED',
      version: '0.0.0',
      scripts: {
        build: 'parcel build public/*',
        clean: 'rm -rf .cache dist',
        start: 'parcel public/*'
      }
    })
  }

  configuring() {
    this.npmInstall(DEPENDENCIES)
    this.npmInstall(DEV_DEPENDENCIES, { 'save-dev': true })
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    })
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath('.'),
      { appName: this.determineAppname() },
      null,
      { globOptions: { dot: true } }
    )
  }
}
