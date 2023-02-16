# Medical-Billing-System

Medical Billing Upload service is a REST API designed to create medical bills and retrieve all created bills.
This API is developed to support 2 HTTP requests:
1)POST Request: to create medical bill (/create)
2)GET Request: to retrieve medical bill (/get)

Medical-Billing-Upload-System

Perform following steps to build and execute this project:

Install Node.js using following command
npm install -g npm

To verify version of node and npm , use following command
node -v
npm -v

clone the existing project from github repository using commmand
git clone https://github.com/gourisabale18/Medical-Billing-System.git

Install express
npm install --save express

Install Express Middleware
npm install --save body-parser
npm install --save cors

Run project file billing-api.js using following command:
node billing-api.js

Install postman from site:
https://www.postman.com/downloads/

Configure post request and get request as shown in the video on localhost and port no specified in billing-api.js

Install jest and supertest for api testing
npm install supertest --save-dev
npm install --save-dev jest

To execute api tests,use command:
npx jest









