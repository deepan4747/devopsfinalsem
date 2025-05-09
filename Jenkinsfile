pipeline {
    agent any

    environment {
        // Example: set environment variables
        APP_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'your-creds-id', url: 'https://github.com/your/repo.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install' // or 'mvn clean install' or other build command
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' // or 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                // Example: Docker deployment or SSH command
                sh './deploy.sh' // Custom deploy script
            }
        }
    }

    post {
        success {
            echo 'Build, test and deployment succeeded!'
        }
        failure {
            echo 'Build failed. Sending alert...'
            // Add email or Slack notification here
        }
    }
}
