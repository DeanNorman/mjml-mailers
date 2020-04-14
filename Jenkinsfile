/** 
 * Website build script.  
 *
 * TODO: NA 
 *
 * ! Security needs to be fixed.
 *
 * Website uses gatsbyjs.org to build static output files. Pulls code from
 * github, uses the branch to decide where the code will end up as well as if it
 * is being built for libc or musl. SSH credentials are stored on the vault
 * server, endpoint is https:[VAULTSERVER]/kv-jenkins-[BRANCH_NAME]/ssh, and the
 * key is `prv`.  DNS is used to define where the artifacts are sent IE
 * jill.[BRANCH_NAME].my227.net.=> where the ip resolved is in dev, staging, or
 * production.
*/

/** 
 * * Groovy Zone 
*/

// DNS,Vault based on branch name: [develop|staging|master].
def sshRemote = [:]
	sshRemote.host = "publicsite.${env.BRANCH_NAME}.my227.net"
	sshRemote.name = "publicsite.${env.BRANCH_NAME}.my227.net"
	sshRemote.user = "jenkins-${env.BRANCH_NAME}"
	sshRemote.identity = vault path: "kv-jenkins-${env.BRANCH_NAME}/ssh", key: "prv", credentialsId: "jenkins-${env.BRANCH_NAME}", engineVersion: "2"
	sshRemote.allowAnyHosts = true

/**
 * * DSL Zone - Jenkins Pipeline
*/

pipeline {
	agent { label 'master' }
	options {
		buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
		disableConcurrentBuilds()
		skipStagesAfterUnstable()
		timeout(activity: true, time: 1, unit: 'HOURS')
		skipDefaultCheckout true
	}
	environment {
		JOB = "publicsite"
		ENV = "${env.BRANCH_NAME}"
		NUM = "${env.BUILD_NUMBER}"
		DOCKER_TAGS = "${JOB}.${ENV}"
		DOCKER_FILE = "Dockerfile"
	}
	stages {
		stage('Build App') {
			options { skipDefaultCheckout false }
			agent {label 'docker'}
			steps {
				sh label: 'Docker Build', script: """
					docker build \\
						--tag ${DOCKER_TAGS} \\
						--file ${DOCKER_FILE} \\
						.;
				"""
				sh label: 'Copy out of Container.', script: """
					docker run \\
						--rm \\
						--mount type=bind,src=${env.WORKSPACE},dst=/mnt \\
						${DOCKER_TAGS} \\
						"-c" "cd /src/public/ && tar -cz -f /mnt/${JOB}.tar.gz *";
				"""
				archiveArtifacts allowEmptyArchive:false , fingerprint:true, artifacts:"${JOB}.tar.gz"
				// sh 'docker rmi --force ${DOCKER_TAGS}'
			}
		}
		stage('Package App') {
			options { skipDefaultCheckout true }
			agent {label 'fpm'}
			steps{
				echo 'TODO'
			}
		}
		stage('Publish') {
			options { skipDefaultCheckout true }
			agent {label 'master'}
			stages{
				stage('Develop') {
					when {branch 'develop'}
					steps {
						copyArtifacts fingerprintArtifacts:true, projectName:env.JOB_NAME, selector:specific(env.BUILD_NUMBER)
						sshPut remote:sshRemote, from:"${JOB}.tar.gz", into:"."
						sshCommand remote:sshRemote, failOnError:true, command: """
							sudo rm -rf /srv/${JOB}.${ENV}.my227.net/public/;
							sudo mkdir -p /srv/${JOB}.${ENV}.my227.net/public/;
							sudo tar -xzf /home/jenkins-${ENV}/${JOB}.tar.gz -C /srv/${JOB}.${ENV}.my227.net/public/;
							sudo chown -R nginx:nginx /srv/${JOB}.${ENV}.my227.net/;
							find /srv/${JOB}.${ENV}.my227.net -type f -print0 | sudo xargs -0 chmod 644;
							find /srv/${JOB}.${ENV}.my227.net -type d -print0 | sudo xargs -0 chmod 755;
						"""
						sshRemove remote:sshRemote, failOnError:true, path:"${JOB}.tar.gz"
					}
				}
				stage('Staging') {
					when {branch 'staging'}
					steps {
						echo 'TODO'
					}
				}
				stage('Production') {
					when {branch 'master'}
					steps {
						echo 'TODO'
					}
				}
			}
		}
	}
}
