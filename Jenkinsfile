
pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t nodejs-demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker rm -f nodejs-demo-jenkins 2>NUL & docker run -d --name nodejs-demo-jenkins -p 3001:3000 nodejs-demo-app'
            }
        }
    }

    post {
        success {
            echo 'Jenkins CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
