pipeline {
    docker {
        image 'alpine'
        label 'alpine-node'
        args  '-v /tmp:/tmp'
    }
    stages{
        stage('Install'){
            steps{
                sh 'npm install'
                sh 'ls'
            }
        }
    }
}
