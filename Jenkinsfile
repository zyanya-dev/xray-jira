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
                publishHTML (
                    target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'test/report/cucumber_report.html',
                        reportFiles: 'cucumber.html',
                        reportName: 'Cucumber',
                        reportTitles: 'The Report'
                    ]
                )
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