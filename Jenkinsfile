pipeline {
  agent any
  tools {nodejs "Node"}
  stages {

    stage("Install modules") {
      steps {
        sh "rm -rf node_modules"
        sh "npm install"
      }
    }

    stage("Testing") {
      steps {
        sh "npm run test"
        sh "npm run lint"
      }
    }

    stage("Build") {
      steps {
        sh "rm -rf build"
        sh "npm run build"
      }
    }

  }
}
