<h1>Frontend configs</h1>
Now that you have made all the steps within the main project and backend folders, enter the frontend folder with the following command:

```cd frontend```

After that, to install all dependencies, run:

```npm i``` or ```yarn install```

<hr>

<h2>Starting frontend</h2>
Now that you have the project configured, you can run it with:

```npm start``` or ```yarn start```

You should see the main page opened in your browser:

![image](https://user-images.githubusercontent.com/90801658/235324968-66f80430-10d6-485f-b04f-98aea262fe2f.png)

<hr>

<h2>Structure</h2> 
The frontend is set up to run on port 3001 while your backend is running on port 3000. It will open automatically and, if not, it will ask you if you agree to open it in another port if the one it requires is already running something.

Structurely, so you can understand, we have:
  1. 📦 src folder:<br>
    - It's where our main structure is stablished. Now, we will dismember it, one by one.
    
      • 📁 assets folder:
        - It is where our images are alocated
      
      • 📁 components folder:
      
        - 📂 Both folder:
         - Where we'll find the components made for our footer and our header. There you'll find how they are build up and their style.
          
        - 📂 Dashboard folder:
         - Where we'll find our Title, Menu and Content components and the style.
         - It's important to say that inside of our content folder we have basically the essential stuff for our application, so we'll go deeper on this one.
          
            a. 🗂️ Content folder:<br>
                - We have our configs and style, of course;<br>
                - 🪪 Admin folder: where we set all the configs and styles for our admin page, but not only that.. We also define our admin behaviour through the application. When we are set as admin, we can edit and delete users from our platform. If we are a regular user, we can only see the list of users registered;<br>
                - 🏠 Home folder: where we show our list of users and it's a common characteristic for all of our users.<br>
      
        - 📂 tests folder:
         - Where we have our automation tests made with Jest. You can run it if you want with the `yarn jest` command;
    
      • 📁 pages folder:
         - Where we have our signin and signup tests. You can run it with `yarn jest` command too.
         - We either have our structure of Home and Dashboard routes and we can check if our JWT token is properly workin, together with our form configs so we can signup or signin.
      
      • 📁 stores folder:
          - Where we have our configs, paths and our menu behaviour. When we are logged, if we pass the mouse cursor into our names, it shows up a menu.
    
  2. 📄 api.js file:<br>
    - Where we config our baseUrl for our project to call our backend service and pass the JWT valid token so we can run our application;
    
  3. 📄 app.js file:<br>
    - Where we call our routes set up inside of our stores folder for the frontend application;
    
  4. 📄 functions.js file:<br>
    - Where we stablish the necessary data and alerts by filling the form;

  5. 📄 globalStyle.js file:<br>
    - Where we set the global style for our application;

  6. 📄 index.js file:<br>
    - Where we call our main components for the application to run correctly;

  7. 📄 initioStates.js file:<br>
     - Where we define our initial state for every data, component and application page;

  8. 📄 routes.js file:<br>
    - Where we stablish our main routes inside of our application;

  9. 📄 socket.js file:<br>
    - A module that allow low latency and based itself on communication events between a server and a client;

<hr>

<h1>Routes and Pages</h1>

Finally, with that explained, you should be able to check our contents.

As you saw earlier, we have our main page for our user to login. But if you're not registered yet or want to register a new user, you can click on "Create account", at the inferior part of our form:

![image](https://user-images.githubusercontent.com/90801658/235324968-66f80430-10d6-485f-b04f-98aea262fe2f.png)

Doing so, you'll automatically be redirected to our signup form:

![image](https://user-images.githubusercontent.com/90801658/235360012-8c019fa7-4824-4245-85e3-38774cbf1ce6.png)

You can signup, but be aware! If you forget to fill in any necessary fields or if your passwords don't match, you'll get a warning.

<h2>Home page</h2>

If you login as a regular user, you'll be able to see the list of users:

![image](https://user-images.githubusercontent.com/90801658/235360369-5dace0b8-7644-4282-a83f-93371d64a28b.png)

But, that's all you can do. If you're an admin, you have an extra: you can edit or delete users as you go to de admin page. For that, you'll have that option inside of the menu:

![image](https://user-images.githubusercontent.com/90801658/235360475-7d036de0-4429-46a6-b68e-e18aa32f235c.png)

<h2>Admin page</h2>
Here we have our admin page:

![image](https://user-images.githubusercontent.com/90801658/235360519-9fb31ea0-8763-4fa6-a856-842b0e056b63.png)

You can edit users, make them admin and delete them. If you want to register a new user, you must logout and fill in the signup form.

Thank you and enjoy.
