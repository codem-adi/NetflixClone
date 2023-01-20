# NetflixClone
### 👉 Let's Go👈
### I have created this web site using the MERN stack 
 - Tech Used
    - Mongo DB
    - Express JS
    - React JS
    - Node JS
    - Mongoose
    - HTML
    - SASS
    - JWT
    - jsencrypt
   
# KEY Features
  - Authentication
    - Without the login the user is not event allowed to go on the home page. 
    - Every user shoudl register with unique email id.
    - JWT token is generated for every user and on every request to the data base get verified first with that token.
    - To make any changes in data base you should be admin.
  - Access of the movie
    - You can get the movie only with the id which is unique for every movie.
    - Multiple playList is created for every single user.
    - Adding/Removing or Modifing the movie can be done only with the account which wil be marked admin.
    - Every list is seperated with thir genre.
    - A randowm movie will be featured every time.
  - Storage
    - Mongo DB
      - The user details as well as the details of every playlist and movie is stored in different collection.
      - Authentication on the user input to verify its not somthing harmfu to the server.
      - converting the input to text or number so that there will be no consequences.
      
    - FireBase
      - It is use for the storage of the video and images.
      - An unique id will be given for every video and image for easy future access.
      - The access of the data will be from the server no user can directly connect to the firebase database.
      
      
### Few view Of the project
    
    This is the login page which is compulsory 💪 to do before going to the content or home screen 🍿. 

   ![Login](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/login.png) 
   
    If you dont have account 😱 then you can go to SignUp page which lock like this 👇
   
   ![Sign Up](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/signup.png)
   
    We do check the passwrod length ⚖️ which sold be fulfilled before moving forward.
   
   ![Password length](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/passwordRequirment.png)
   
    To show that the content is not static 🧍🏻 you can see its getting data from server and the data is not loading because server is not running🏃🏻‍♀️🏃🏻‍♀️.
   
   ![Error](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/ServerIsNotRunnignError.png)
   
    Successfuly 🤟 got the data from the server.
   
   ![Movie And List From Server](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/FetchingMvieFromServer.png)
   
    Trailer play 📽️ on hover 🫵.
   
   ![Playing trailer on hover](https://github.com/codeman-adiitya/NetflixClone/blob/main/ScreenShoot/OnHoverTrailerPlay.png)
    
