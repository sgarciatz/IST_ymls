pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'pwd'
                sh 'ls'
                sh 'sh deploy_users_API.sh'
            }
        }
    }
}