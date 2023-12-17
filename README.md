# Dynamic Form App

This is a simple Dynamic Form application built with Express.js and MySQL. It provides basic CRUD (Create, Read, Update, Delete) operations for a form. Follow the instructions below to run the application.

## Prerequisites
- Node.js installed (Download and install from [https://nodejs.org/](https://nodejs.org/))
- MySQL server installed and running

## Getting Started

1. Clone the repository
2. Go to the directory

3. Install dependencies:

```bash
npm install
```

## Set up the MySQL database:
Create a database named wpt (or choose a different name, but make sure to update the db field in config/default.json accordingly).

Create a SQL schema. You can find the queries in the repository.

Configure the MySQL connection:

## Update the config/default.json file with your MySQL credentials:

```json
{
  "server": "localhost",
  "db": "your-databasename",
  "user": "your-mysql-username",
  "pwd": "your-mysql-username",
  "PORT": 3000,
  "jwtkey": "Vasani98989898989898989898989898989898Vasani"
}

```
# Run the application:
```bash
node index.js
```

The app should now be running. Access it in your web browser at http://localhost:3000.

# Routes
## GET /emps: Retrieve all form data.
## POST /emps: Add a new form entry.
## PUT /emps/:id: Update an existing form entry.
## DELETE /emps/:id: Delete a form entry.

## Note:
### Login credentials:
### Username: meet
### Password: meet@123
Make sure to use these credentials when prompted for login.
