<h1>Backend configs</h1>
Now that you have made all the steps within the main project folder and got it open in your computer, enter the backend folder with the following command:

```cd backend```

After that, to install all dependencies, run:

```npm i``` or ```yarn install```

<hr>

<h2>Starting backend</h2>
Now that you have the project configured, you can run it with:

```npm start``` or ```yarn start```

You should see the following message:

![image](https://user-images.githubusercontent.com/90801658/235322403-f6e885fa-bdbe-41b7-adf0-a61923e10753.png)

<hr>

<h2>Structure </h2> 
The backend is set up to run on port 3000. If you're having a problem with that or if you have another stuff running within this port, you can change it as it suits you.

Structurely, so you can understand, we have:
  1. 📦 api folder:<br>
    - 📄 auth.js file: where we check the user e-mail and password and configure the JWT token;<br>
    - 📄 user.js file: where we check if the user information provided is correct and implement the main methods, as create, update, read (get) and delete;<br>
    - 📄 validation.js file: where we validate wheter the information provided exists or not, making an error treatment.<br>
    
  2. 📦 config folder:<br>
    - it is where we have our test folder, and you can run it with ```yarn jest``` command.<br>
    - 📄 admin.js file: to check if the user we got is an admin;<br>
    - 📄 db.js file: where we connect to our database with a module named as ```knex```;<br>
    - 📄 middlewares.js file: where we interprete our body request to access our api through other application, like our frontend, for example;<br>
    - 📄 passport.js file: where we receive our JWT token and conceive a passport for our user;<br>
    - 📄 routes.js file: where we set out main routes for the application.<br>

  3. 📦 migrations folder:<br>
    - where we have our user table build up using knex
    
  4. 📄 index.js file:<br>
    - where we adjust our dependencies relationships between our many files and pass the listening port for our backend
    
  5. 📄 knexfile.js file:<br>
    - where we config our PostgreSQL database access, importing a file named .env. This file is occult due to security reasons, but here is a model where you can get an example on how to build it:
    
    ```module.exports = {
      SECRET_KEY: 'paste your token here',
      db: {
          host : '',
          port: your database port,
          database: 'Your database name',
          user: 'Your database user',
          password: 'Your database password'
          }
        }```

<hr>

<h1>Routes </h1>

Finally, with that explained, you should be able to test the routes we got using an API client, such as Postman or Insomnia, for example.

The main routes you should tests are these:

![image](https://user-images.githubusercontent.com/90801658/235323395-fec1f7e7-aa13-4667-8701-f930a8f90752.png)



  1. User signup - POST
      
      ```URL: http://localhost:port/signup```
      
     JSON body example:
      
       ![image](https://user-images.githubusercontent.com/90801658/235323489-a9dc5bd3-8ed7-439b-9033-0f7bd2917e9b.png)

   
    
  2. User signin - POST
      
      `URL: http://localhost:port/signin`
      
     JSON body example:
          
      ![image](https://user-images.githubusercontent.com/90801658/235323933-625c16f2-50fd-44fa-a13d-6b39ef3b818d.png)
      
      
   3. Create user - POST
      
      `URL: http://localhost:port/users`
      
      JSON body example:
          
      ![image](https://user-images.githubusercontent.com/90801658/235324056-30fcf526-0a25-4546-bb17-f53c46efbfab.png)
      
      
   4. Read users - GET
      
      `URL: http://localhost:port/users`
      
   
   5. Read users by id - GET
      
      `URL: http://localhost:port/users/id`
      
   
   6. Update user by id - PUT
   
      `URL: http://localhost:port/users/id`
      
      You can update any information you want.
  
      JSON body example:

        ![image](https://user-images.githubusercontent.com/90801658/235324140-bc3101f6-10f6-4971-8ad0-faa2612e2bd5.png)
    
    
   7. Delete user - DEL
      
      `URL: http://localhost:port/users/id`
      
     
    
  
     
  
     
