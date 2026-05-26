pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
                git branch:'main', url:'https://github.com/PSumaiah/ci-node-app.git'
            }
        }
        stage('install dependencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('run application'){
            steps{
                bat 'node app.js'
            }
        }
        stage('tests'){
            steps{
                bat 'npm test'
            }
        }
        stage('build docker images'){
            steps{
                bat 'docker build -t ci-node-app .'
            }
        }
        stage('run docker containers'){
            steps{
                bat 'docker run -d -p 3000:3000 --name node container ci-node-app'
            }
        }
    }
}