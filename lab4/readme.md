#NPM Project
1. go to project folder (by cd)
2. type "npm init -y"
3. open package.json
4. update type module 
5. install nodemom "npm i nodemon -d"
6. updayte script in package.json

script {
    "start ": "node app.js"
    "dev" : "nodemon prg7.js "

    }
     
  7.   add node_moudules to .gitignore 
  8.    to run use `npm run dev`
  ## REST API
  - majorly backend server returns only data not html file 
  - REST API uses (grt, post, put, patch, delete)method to communicate with client
  - any browser can check only get method 
  - for other method type we use third party api tester like 
  - app crashed error meaning code error disconnect or vs code restart.
  #Request type

  1. GET-> get all , get by id
  2. POST-> /api/products (an data will be shared by echo api body section).
  3. PUT/PATCH -> /api/products/201 (id and body both will be used)
  4. Delete -> /api/products/110