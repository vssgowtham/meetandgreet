# meet-and-greet
This web application helps students to greet,meet and share common interests

# Requirements
1. Install nodejs from this link https://nodejs.org/en/download/
2. Install angular-cli using command `npm install -g @angular/cli`
3. Install Java latest version.

# How to setup backend springboot app

1. Install MySQL database https://www.mysql.com/downloads/. Make sure that you are able to start mysql server.
2. Create database using command `create database meet_greet;`
3. Change `spring.datasource.username` field value to database username and `spring.datasource.password` field value to database username in `src/main/resources/application.properties` file.
4. Excute the command `mvn spring-boot:run`. This should start the spring boot application.

# How to start the angular app

1. Clone the repo
2. Open Terminal
3. cd `greet-share-meet/frontend`
4. `npm install` - This command installs all dependent node modules required to run the angular app
5. `ng serve` - This command launches the angular app on Port 4200
6. Visit `http://localhost:4200/`. You should see the login page.
7. Goahead and playaround with the app.
