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
                publishHTML(
                    [
                        allowMissing: false, 
                        alwaysLinkToLastBuild: false, 
                        keepAll: false, reportDir: 'test/report/', 
                        reportFiles: 'cucumber_report.html', 
                        reportName: 'cucumber_report.html', 
                        reportTitles: ''
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