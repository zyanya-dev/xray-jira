pipeline {
    agent {
        docker {
            image 'node:12-alpine'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'whoami'
                sh 'node --version'
                sh 'npm --version'
                sh 'npm install'
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