# To test the provided Express.js application using Postman, you can follow these step-by-step instructions:

## 1. Start the Express Server:
Make sure your Express server is running. If it's not running, navigate to the project directory in the terminal and run the command:

```bash
node index.js
```


## 2. Test the Login Endpoint:

Open Postman.

Create a new request.

Set the request type to POST.

Set the request URL to http://localhost:3000/login 

In the request body, select "raw" and set the content type to JSON. Add the following JSON for login credentials:

```json
{
  "username": "meet",
  "password": "meet@123"
}
```
Send the request.

You should receive a response containing a login token.

## 3. Test the /emps Endpoint (GET Request):

Create a new request.
Set the request type to GET.
Set the request URL to http://localhost:3000/emps.
In the Headers section, add the Authorization header and set its value to the login token you received.
If the token is valid, you should see the list of employees from your database.

## 4. Test the /emps Endpoint (POST Request):
Create a new request.

Set the request type to POST.

Set the request URL to http://localhost:3000/emps.

In the Headers section, add the Authorization header and set its value to the login token you received.

In the Body section, select "raw" and set the content type to JSON. Add the following JSON for a new employee:

```json
{
    "name": "Meet Vasani",
    "age": "23",
    "no": "1234567890",
    "email": "meetvasani@gmail.com"
}
```
Send the request.

If successful, you should receive a response indicating the success of the POST operation.


## 5. Test Other Endpoints (PUT and DELETE):
Similarly, you can create requests for the /emps endpoint with PUT and DELETE methods by specifying the employee No in the URL and providing the necessary data in the request body.

