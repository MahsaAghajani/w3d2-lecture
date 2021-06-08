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
    '45rur1': {
        id: '67tir1',
        name: 'Marlin',
        movie: 'Finding Nemo',
      },
    '45rur2': {
        id: '67tir1',
        name: 'Marlin',
        movie: 'Finding Nemo',
      },
  };



// Method + action(path)

app.get('/', (req, res) => {
    res.send('Welcome to see people and their favorite movies!');
  });

// CRUD OPERATION

//list of all the people
app.get('/people', (req, res) => {
  const templateVars = {people : people}
  res.render("people", templateVars);
});


//Create or add a new person
app.get("/people/new", (req, res) => {
  res.render("new")
});


app.post("/people", (req, res)=> {
  console.log(req.body)
  let key = Math.random().toString(36).substr(2,8)
  people[key] = {id :key, name : req.body.name , movie: req.body.movie }

  res.redirect("/people")

});




//Update or edit a person
app.get("/people/:id", (req, res) => {
  const key = req.params.id
  console.log(key)
  const templateVars = {name : people[key].name, flower:people[key].movie, id: people[key].id}
  res.render("edit", templateVars)
})

app.post("/people/:id", (req, res) => {
  console.log(req.body)
  people[req.params.id] = {id : req.params.id, name : req.body.name, movie: req.body.flower}

  res.redirect("/people")

})


//Delete or remove a person
app.post("/people/:id/delete", (req, res) => {
  delete people[req.params.id];

  res.redirect("/people")
})


  
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

