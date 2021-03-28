![banner](/assets/banners/banner_primary.png)
---

Scrapbook is a micro-service architecture based application that enables users to upload and manage images. It empowers the users to securely share images by introducing various roles. The users also have access to an intuitive dashboard to view different metrics and monitor various activities. Scrapbook aims to introduce simplicity in photo management.

##### 💻 [Demo](http://149.165.171.229:30000/)

![banner](/assets/napkin_diagram.png)

---

## Technology Stack

- Angular 11 (TypeScript)
- SpringBoot (Java 15)
- Flask (Python)
- MongoDB Atlas
- Redis Cloud
- Google Cloud Storage
- Apache Kafka
- RESTful Webservices
- Jenkins
- Kubernetes
- Terraform
- Ansible

## System Architecture

![architecture](/assets/updated-architecture.png)

## System Workflow

![workflow](/assets/updated-workflow.png)

## Application Deployment

To create VMs and configure kubernetes on the VMs follow [zonca's blog](https://github.com/zonca/zonca-blog/blob/master/_posts/2021-01-20-jetstream_kubernetes_kubespray_2.15.0.md). Once you have the VMs set up, follow the steps below to deploy scrapbook on the cloud.

```
# SSH into the master node of the Kubernetes cluster
$ git clone https://github.com/airavata-courses/scrapbook.git
$ cd scrapbook
$ chmod +x start.sh
$ ./start.sh
```


## Mockups

Please visit our wiki page [here](https://github.com/airavata-courses/scrapbook/wiki/Mockups) to see our mockup designs.

## Project Installation (Local)

### Dependencies

Make sure you have these dependencies installed in your machine before installing each service.

- Node/NPM
- Python3.8
- Java 15
- MongoDB
- Redis
- Angular CLI
- Maven

### Repository 
```
$ git clone https://github.com/airavata-courses/scrapbook.git
$ cd scrapbook
```

### How to run

Start a service either by going to their respective folders or using the start script

### Installation

#### scrapbook-ui
- Port: 4200

```shell
$ cd scrapbook-ui
$ npm install
$ npm start
```

#### scrapbook-auth-service
- Port: 5000

```shell
$ cd scrapbook-auth-service
$ python3 -m env env # creating a virtual environment
$ source env/bin/activate
$ pip install -r requirements.txt
$ python app.py
```

#### scrapbook-session-service
- Port: 3500

```shell
$ cd scrapbook-session-service
$ npm install
$ npm run dev
```

#### scrapbook-user-service
- Port: 3000

```shell
$ cd scrapbook-user-service
$ npm install
$ npm run dev
```

#### scrapbook-gateway-service
- Port: 8081

```shell
$ cd scrapbook-gateway-service
$ python3 -m env env # creating a virtual environment
$ source env/bin/activate
$ pip install -r requirements.txt
$ python app.py
```


#### scrapbook-google-drive-service
- Port: 9090

```shell
$ cd scrapbook-google-drive-service
$ mvn clean install
$ cd target
$ java -jar -Dspring.profiles.active=local googledrive-service-0.0.1-SNAPSHOT.jar
```

#### scrapbook-image-service
- Port: 8080

```shell
$ cd scrapbook-image-service
$ mvn clean install
$ cd target
$ java -jar -Dspring.profiles.active=local image-service-0.0.1-SNAPSHOT.jar
```


## Documentation

- [Wiki](https://github.com/airavata-courses/scrapbook/wiki)

## Project Milestones

- [Project Milestone 1](https://github.com/airavata-courses/scrapbook/wiki/Project-1)
- [Project Milestone 2](https://github.com/airavata-courses/scrapbook/wiki/Project-2)
- [Project Milestore 3](https://github.com/airavata-courses/scrapbook/wiki/Project-3)

## Team 

- **Chirag Shankar Indi**: Chirag is a first year Master's student studying at Indiana University Bloomington, majoring in Computer Science with a focus on AI/ML. He has full time experience as a Software Engineer working with the High Performance Computing and Technical Infrastructure team at Shell, along with multiple internships in fields of Software Development, Machine Learning, and Networking.    

   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/chirag-indi/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/chirag-indi)

- **Hrishikesh Paul**: Hrishikesh is a final year Masters student, studying Computer Science and specializing in Software/Frontend Engineering. His experience includes Full Stack Development using Angular, Vue, Node, Flask and MongoDB. Currently, he is the Lead Software Engineer at [CNS](https://cns.iu.edu/), working with the NIH to build scalable and open source visualization tools for researchers and doctors.

   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/hrishikeshpaul/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/hrishikeshpaul)


- **Jyoti Bhushan**: Jyoti is a graduate student pursuing Master from Indiana University Bloomington, majoring in Computer Science. She has worked for multiple global organizations as a Software Developer and, also has an experience working in a startup to build products from scratch. She has expertise in Java, Springboot, RESTful webservices along with Apache Kafka and Elasticsearch.
   
   [<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/jyoti-bhushan-12122460/)
   [<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />](https://github.com/jbhushan791)


## Contributing

To contribute, please read our [Git Workflow guide](https://github.com/airavata-courses/scrapbook/wiki/Git-Workflow).
