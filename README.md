# meetandgreet
This web application helps students to greet,meet and share common interests

Requirements
Install nodejs from this link https://nodejs.org/en/download/
Install angular-cli using command npm install -g @angular/cli
Install Java latest version.
How to setup backend springboot app
Install MySQL database https://www.mysql.com/downloads/. Make sure that you are able to start mysql server.
Create database using command create database meet_greet;
Change spring.datasource.username field value to database username and spring.datasource.password field value to database username in src/main/resources/application.properties file.
Excute the command mvn spring-boot:run. This should start the spring boot application.
How to start the angular app
Clone the repo
Open Terminal
cd greet-share-meet/frontend
npm install - This command installs all dependent node modules required to run the angular app
ng serve - This command launches the angular app on Port 4200
Visit http://localhost:4200/. You should see the login page.
Goahead and playaround with the app.
