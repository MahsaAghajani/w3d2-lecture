const PORT = 8080;
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser');

// creating an Express app
const app = express();


// morgan middleware allows to log the request in the terminal
app.use(morgan('short'));

// Static assets (images, css files) are being served from the public folder
app.use(express.static('views'));

// Setting ejs as the template engine - ejs, pug, handlbars...
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

// In memory database
const people = {
    '4pnagb': {
      id: '4pnagb',
      name : 'Mahsa',
      movie: 'Harry Potter',
    },
    '67tir1': {
      id: '67tir1',
      name: 'Alice',
      movie: 'Alice in wonderland',
    },
    '67tir2': {
        id: '67tir2',
        name: 'Marlin',
        movie: 'Finding Nemo',
      },
  };

// Method + action(path)

app.get('/', (req, res) => {
    res.send('Welcome to see people and their favorite movies!');
  });


  //CRUD OPERATIONS

  // Http method + http action

  //READ
  app.get("/persons", (req, res) => {
      const templateVars = {peopleObjects :people }
      res.render("persons", templateVars)
  })


  //CREATE
  app.get("/persons/new", (req, res) => {
      res.render("new")
  })

  app.post("/persons", (req, res) => {
      console.log(req);

      let key = Math.random().toString(36).substr(2,8)
      people[key] = {id :key, name : req.body.name , movie: req.body.movie }


      res.redirect("/persons")
  })



  //UPDATE
  app.get("/persons/:id", (req, res) => {
      const key = req.params.id
      const templateVars = {name : people[key].name, movie: people[key].movie, id: people[key].id}
      res.render("edit", templateVars)
  })

  app.post("/persons/:id", (req, res) => {
    const key = req.params.id;
    people[key] = {id : key, name: req.body.name, movie: req.body.movie}

    res.redirect("/persons")
  })

  //DELETE
  app.post("/persons/:id/delete", (req, res) => {
      const key = req.params.id;
      delete people[key];

      res.redirect("/persons")
  })
  
  
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

