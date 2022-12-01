pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'docker build ./API_users -t ISTIC/API_users'
                sh 'docker build ./API_serverHosting -t ISTIC/API_serverHosting'
                sh 'docker build ./API_videogames -t ISTIC/API_videogames'
                sh 'docker build ./API_chat -t ISTIC/API_chat'
            }
        }
         stage('test') {
            steps {
                sh 'echo Testing'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker run -p 8081:8081 ISTIC/API_users:latest'
                sh 'docker run -p 8082:8082 ISTIC/API_serverHosting:latest'
                sh 'docker run -p 8083:8083 ISTIC/API_videogames:latest'
                sh 'docker run -p 8084:8084 ISTIC/API_chat:latest'
            }
        }
    }
}
