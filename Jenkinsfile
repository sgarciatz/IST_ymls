/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'ls'
            }
        }
}