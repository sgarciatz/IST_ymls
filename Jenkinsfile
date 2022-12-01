pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                cd ./API_users
                docker build . -t <your username>/node-web-app
                cd ../
                docker build . -t <your username>/node-web-app
                docker build . -t <your username>/node-web-app
                docker build . -t <your username>/node-web-app

            }
        }
    }
}
