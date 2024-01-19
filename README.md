- [An overview of the solution](https://www.loom.com/share/fc623ce05a5b420286d8a01b47b55515)

## About the project

#### Login Page
- To get to the schedule page, you need to enter login `kevych@gmail.com` and password `kevych` and click the button

#### Trains Page
- The train schedule is displayed on the screen
- You can create a new trip by clicking on the button `Create new train`
- You can sort the train schedule by date and price by clicking on the buttons `Sort by date` and `Sort by price`
- You can filter your search by entering the departure city and arrival city in the search field
- You can make changes to each trip
- You can delete any trip

## Technologies
- Node v20.10.0
- Next.js v14.0.4
- Nest.js v10.3.0
- PostgreSQL
- Material UI

## To run the project
- Make a fork
- Clone the project

### Frontend
- cd client
- npm install
- install all needed dependencies
- npm run dev
- Open `http://localhost:3000/`

### Backend
- cd server
- npm install
- install all needed dependencies
- npm start
- Open `http://localhost:4000/trains`

### Postgresql
- open pgAdmin 4
- create database - trains_schedule
- in cd server - src/ormconfig.json and src/app.module.ts write your username and password