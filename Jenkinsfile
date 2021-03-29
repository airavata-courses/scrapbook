node {
    def app
    def file = 'scrapbook-staging'
    def masterIP = '149.165.171.246'
    def user = 'ubuntu'

  stage('Clone repository') {
    /* Checking out to the repository */
    checkout scm
  }

  stage('Deploy on Kubernetes'){
    /* SSH-ing to Kubernetes master and applying config */
    sshagent(["kube-ssh-staging"]) {
      sh "ssh ${user}@${masterIP} rm -rf start.sh"
      sh "scp start.sh ${user}@${masterIP}:/home/${user}"
      sh "ssh ${user}@${masterIP} chmod +x start.sh"
      sh "ssh ${user}@${masterIP} ./start.sh"
    }
  }
}