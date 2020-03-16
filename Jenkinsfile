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
        stage('Cucumber Test') {
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
        stage('Expose report') {
            steps{
                archive "test/report/cucumber_report.json"
                cucumber 'test/report/cucumber_report.json'
            }
            
        }
        stage('Import results to Xray') {           
           /* def description = "[BUILD_URL|${env.BUILD_URL}]"
            def labels = '["regression","automated_regression"]'
            def environment = "DEV"
            def testExecutionFieldId = 10008
            // def testEnvironmentFieldName = "customfield_10132"
            def projectKey = "CALC"
            def xrayConnectorId = 'CLOUD-cb430a15-4fa5-4c52-bec2-7606bd1e7357'
            def info = '''{
                    "fields": {
                        "project": {
                            "key": "''' + projectKey + '''"
                        },
                        "labels":''' + labels + ''',
                        "description":"''' + description + '''",
                        "summary": "Automated Regression Execution @ ''' + env.BUILD_TIME + ' ' + environment + ''' " ,
                        "issuetype": {
                            "id": "''' + testExecutionFieldId + '''"
                        },
                    }
                }'''

                echo info*/
            steps {
                step([$class: 'XrayImportBuilder', endpointName: '/cucumber/multipart', importFilePath: 'test/report/cucumber_report.json', importInfo: '''projectKey=CALC testExecutionFieldID=10008''', inputInfoSwitcher: 'fileContent', serverInstance: 'CLOUD-cb430a15-4fa5-4c52-bec2-7606bd1e7357'])
            }
        }
    }
}