Hapi Server
================
A RESTful api built using <a href="http://nodejs.org/">Node.js</a> and <a href="http://hapijs.com/">Hapi.js</a> with <a href="http://www.postgresql.org/">PostgresSQL</a> and <a href="http://sequelizejs.com/">Sequelize.js</a>.  Uploaded for my personal reference.</br>
To install, clone the project.  Make sure you have node and npm installed and run:
<code>$ npm install</code>
</br>
Testing POST
<code>$ curl -X POST -H "Content-Type: application/json" -d '{ "email" : "john@smithmail.com", "password" : "1234", "firstname" : "John", "lastname" : "Smith", "company" : "Redshift" }' -i http://localhost:3000/developers</code>
