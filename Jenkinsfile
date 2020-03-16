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
        stage('Expose report') {
            archive "**/cucumber_report.json"
            cucumber '**/cucumber_report.json'
        }
        stage('Import results to Xray') {

            def description = "[BUILD_URL|${env.BUILD_URL}]"
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

                echo info

                step([$class: 'XrayImportBuilder', endpointName: '/cucumber/multipart', importFilePath: 'test/report/cucumber_report.json', importInfo: info, inputInfoSwitcher: 'fileContent', serverInstance: xrayConnectorId])
            }
        }
}