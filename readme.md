# Assignment build the first RestAPI using JWT

## Setup
* **Install all dependencies:**

	<The request typ>

	  npm install


 * **Start nodemon:**
		
	<The request type>
	
	   npm run dev
	   	   
* **The application is run at `http://localhost:8000`**

## Login
* **User list:**
check this JSON [User list](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/data/db.json)

* **URL:**
<The request type>
	
	   /login
* **Method:**
<The request type>
	
	   POST
* **Success response:**
![response login success](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-loginuser.png)
* **Error response:**
	<The request type>

	    Code: 400
	    Content: { "message": "Username not found!" }
	
		Code: 400
	    Content: { "message": "Wrong password!" }

	    Code: 500
	    Content: { error : "Internal Server Error" }

## Teams
**Need login before getting teams**
* **Team list:**
check this JSON [Team list](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/data/db.json)

* **URL:**
<The request type>
		
	   #get all team list
	   /teams
	   
	   #get team by id
	   /teams/:id
* **Method:**
<The request type>
	
	   GET
* **Success response:** <br>
 get all teams
![response get all teams](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-getallteams.png)
 get team by id
![response get team by id](https://github.com/fadlan7/Assignment-RestAPI-JWT/blob/main/apiresponse_images/postman-getteambyid.png)

* **Error response:**
	<The request type>

	    Code: 400
	    Content: { "message": "Didn’t find a team with id 4"}

	    Code: 500
	    Content: { error : "Internal Server Error" }

## Response no routes
<The request type>

	Code: 404
	Content: { "message": "That route does not exist!"}
