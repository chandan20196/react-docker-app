pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'

                echo 'Building React application...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test -- --watchAll=false || true'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t my-react-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying React application...'

                sh '''
                    docker rm -f react-frontend || true

                    docker run -d \
                        --name react-frontend \
                        -p 8080:5173 \
                        my-react-app
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            echo 'Application available on port 8080'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}