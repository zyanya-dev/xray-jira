pipeline {
    agent {
        docker {
            image 'node:12-alpine'
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }

    /*agent{
        docker {
            image 'alpine'
            label 'alpine-node'
            args  '-v /tmp:/tmp'
        }
    }
    stages{
        stage('Install'){
            steps{
                sh 'npm install'
                sh 'ls'
            }
        }
    }*/
}