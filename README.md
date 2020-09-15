<h1>Bam's Barber Shop</h1>

This is the front-end to our senior capstone project.

<h1>Table of Contents</h1>

- [Running The Test Script](#running-the-test-script)
- [Building](#building)
- [Viewing Staging](#viewing-staging)

# Running The Test Script
The test script `$ npm run test` invokes two script commands:
1. `$ npm run jest`
2. `$ npm run lint`

# Building
You can build the project with:
```
$ npm run build
```

This build create a folder called `build` with all the assets the website will use.

and serve the build with

```
$ serve -s build
```


**You must have the `serve` program installed**. You can install it with `$ npm install -g serve`. This may require root privileges.

# Viewing Staging
The application is hosted via AWS Amplify. You can view the application in staging in the below url:

https://master.d1smlrwpipxh5g.amplifyapp.com/

In final deployment (production), we will have to purchase a domain name and route said domain to this this website.
