pipeline {
    stages{
        stage('Checkout Self'){
		    git branch:'master'
		}
        stage('Install'){
            steps{
                sh 'npm install'
            }

        }
    }
}
