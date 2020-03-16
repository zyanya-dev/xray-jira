pipeline {
    agent {
        label 'master'
    }
    stages {
        stage('Test') {
            steps {
                sh 'whoami'
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