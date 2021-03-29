![banner](/assets/banners/banner_primary.png)
---

Scrapbook is a micro-service architecture based application that enables users to upload and manage images. It empowers the users to securely share images by introducing various roles. The users also have access to an intuitive dashboard to view different metrics and monitor various activities. Scrapbook aims to introduce simplicity in photo management.

### 💻 [Production Demo](http://scrapbook.rocks/)
### 💡 [Staging Demo](http://staging.scrapbook.rocks/)

![banner](/assets/updated-napkin-diagram.png)

<br>

## 📦 Technology Stack

- Angular 11 (TypeScript)
- SpringBoot (Java 15)
- Flask (Python)
- MongoDB Atlas
- Redis Cloud
- Google Cloud Storage
- Apache Kafka
- RESTful Webservices
- Docker
- Jenkins
- Kubernetes
- Terraform
- Ansible

## 🏰 System Architecture

![architecture](/assets/updated-architecture.png)

## 👨‍💻 System Workflow

![workflow](/assets/updated-workflow.png)

## 🚀 Application Deployment

To create VMs and configure kubernetes on the VMs follow [zonca's blog](https://github.com/zonca/zonca-blog/blob/master/_posts/2021-01-20-jetstream_kubernetes_kubespray_2.15.0.md). Once you have the VMs set up, follow the steps below to deploy scrapbook on the cloud. Make sure your current user (eg. ubuntu) has sudo/root access.

```
# SSH into the master node of the Kubernetes cluster
$ sudo su
$ git clone https://github.com/airavata-courses/scrapbook.git
$ cd scrapbook
$ chmod +x start.sh
$ ./start.sh
```

- The production version is currently deployed at http://scrapbook.rocks/

The staging version is currently deployed at http://staging.scrapbook.rocks/

## 🎨 Mockups

Please visit our wiki page [here](https://github.com/airavata-courses/scrapbook/wiki/Mockups) to see our mockup designs.

## 🧱 Project Installation (Local)

### Dependencies

Make sure you have these dependencies installed in your machine before installing each service.

- Node/NPM
- Python3.8
- Java 15
- MongoDB
- Redis
- Angular CLI
- Maven
- Docker

### Repository 
```
$ git clone https://github.com/airavata-courses/scrapbook.git
$ cd scrapbook
```

### Local Installation

#### Manual

Follow the guide in our wiki [here](https://github.com/airavata-courses/scrapbook/wiki/Local-Installation) to locally install scrapbook (all services).

#### Docker

```
# in the scrapbook root directory
$ git checkout docker
$ docker-compose up
```

Navigate to http://localhost:4200/


## 📖 Documentation

- [Wiki](https://github.com/airavata-courses/scrapbook/wiki)

## ✅ Project Milestones

- [Project Milestone 1](https://github.com/airavata-courses/scrapbook/wiki/Project-1)
- [Project Milestone 2](https://github.com/airavata-courses/scrapbook/wiki/Project-2)
- [Project Milestore 3](https://github.com/airavata-courses/scrapbook/wiki/Project-3)

## 💪🏽 Team 

- **Chirag Shankar Indi**: Chirag is a first year Master's student studying at Indiana University Bloomington, majoring in Computer Science with a focus on AI/ML. He has full time experience as a Software Engineer working with the High Performance Computing and Technical Infrastructure team at Shell, along with multiple internships in fields of Software Development, Machine Learning, and Networking.    

   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/chirag-indi/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/chirag-indi)

- **Hrishikesh Paul**: Hrishikesh is a final year Masters student, studying Computer Science and specializing in Software/Frontend Engineering. His experience includes Full Stack Development using Angular, Vue, Node, Flask and MongoDB. Currently, he is the Lead Software Engineer at [CNS](https://cns.iu.edu/), working with the NIH to build scalable and open source visualization tools for researchers and doctors.

   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/hrishikeshpaul/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/hrishikeshpaul)


- **Jyoti Bhushan**: Jyoti is a graduate student pursuing Master from Indiana University Bloomington, majoring in Computer Science. She has worked for multiple global organizations as a Software Developer and, also has an experience working in a startup to build products from scratch. She has expertise in Java, Springboot, RESTful webservices along with Apache Kafka and Elasticsearch.
   
   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/jyoti-bhushan-12122460/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/jbhushan791)


## 🙋🏽 Contributing

To contribute, please read our [Git Workflow guide](https://github.com/airavata-courses/scrapbook/wiki/Git-Workflow).
