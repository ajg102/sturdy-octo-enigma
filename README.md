# Getting Started with Shockoe NodeJS-API Interview

## Cloning this repo

Ensure you have git installed

You can clone this repo by running `git clone` in your terminal

## Fresh Repo

After cloning a fresh version of this repository, you will need to make sure you have all of the required dependencies installed on your computer.

This interview will assume you have `node` and `npm` installed on your machine.

Inside the server directory of this project, run the command:

```
npm install
```

You will also need to ensure your local database has been setup correctly. You will need to perform the following in order:

- Create a database file inside the server/db directory
- Run migrations against the database to create the needed tables
- Run seeds against the database to insert our test data

Consult the `server/package.json` for more information

## Starting the app

When you are ready to start the assessment, you may begin by running

```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The app will reload when you make changes.\
You may also see any lint errors in the terminal window.

# Assessment

**Note**: You may use any documentation or other online resources while you work through this assessment. However, you should be able to explain how you solve the challenges listed below. You may use any way to test the API you prefer.

1. Get the app to compile and successfully run

2. Ensure we have a way to query all users. Update the request to get a user by a specific ID as well as their Todos.

3. Add functionality for creating a Todo

4. Create a search endpoint for users that queries against the user's first name or last name and returns the matched users with their Todos:
   http://knexjs.org/#Builder-whereLike

5. How would you deploy this app in a production environment?
