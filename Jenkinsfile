pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'docker build ./API_users -t istic/api_users'
                sh 'docker build ./API_serverHosting -t istic/api_serverhosting'
                sh 'docker build ./API_videogames -t istic/api_videogames'
                sh 'docker build ./API_chat -t istic/api_chat'
            }
        }
         stage('test') {
            steps {
                sh 'echo Testing'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker run --detach -p 8081:8081 istic/api_users:latest'
                sh 'docker run --detach -p 8082:8082 istic/api_serverhosting:latest'
                sh 'docker run --detach -p 8083:8083 istic/api_videogames:latest'
                sh 'docker run --detach -p 8084:8084 istic/api_chat:latest'
            }
        }
    }
}
