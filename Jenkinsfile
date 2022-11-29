/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stage('Deploy') {
            steps {
                retry(3) {
                    sh 'pwd'
                    sh 'ls'
                }
            }
        }
}