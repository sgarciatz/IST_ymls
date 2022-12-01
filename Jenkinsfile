pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                docker build ./API_users -t ISTIC/API_users
                docker build ./API_serverHosting -t ISTIC/API_serverHosting
                docker build ./API_videogames -t ISTIC/API_videogames
                docker build ./API_chat -t ISTIC/API_chat
            }
        }
    }       
         stage('test') {
            steps {
                sh 'echo Testing'
            }
        }
        stage('deploy') {
            steps {
                docker run -p 8081:8081 ISTIC/API_users:latest
                docker run -p 8082:8082 ISTIC/API_serverHosting:latest
                docker run -p 8083:8083 ISTIC/API_videogames:latest
                docker run -p 8084:8084 ISTIC/API_chat:latest
            }
        }
}
