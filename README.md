# W3D2 - Lecture - CRUD with Express

## What is Express?

- Express is a Web framework for NodeJS
  - Routing -> providing end points
  - Layer on top of node HTTP server
  - Middleware -> such as body-parser and morgan
  - Template Engine(ejs)

## Web App Request/Response Recap

We included a recap in the of the 3-tire architecture of web apps.

## CRUD Operation

For each resource, we want to:

- create => creating a new resource
- read => getting a resource
- update => changing a resource
- delete => deleting a resource

### http methods

What language does a client use to makes request to the server ? http

http protocol gives us verbs

- Create => Create a new ressource => Post
- Read => Get a resource => Get
- Update => Change a resource => Put
- Delete => Delete a resource => Delete


### End Points

We design design the following end points for our quotes app:

| Action                                	| http verb | end point                		|
| ------------------------------------- 	| --------- | ----------------------------- |
| List all persons                       	| GET       | get '/persons'            	|
| Get a specific person                  	| GET       | get '/persons/:id'        	|
| Display the new form                  	| GET       | get '/persons/new         	|
| Create a new persons                    	| POST      | post '/persons            	|
| Display the form for updating a persons 	| GET       | get '/persons/:id/edit' 		|
| Update the person                     	| PUT       | post '/persons/:id         	|
| Deleting a specific persons             	| DELETE    | post '/persons/:id/delete'    |


## Demo

We created an app, showing peoples' names and their favorite movies, demonstrating the use of Express with RESTful routes.

### To run the app

- npm install
- node server.js