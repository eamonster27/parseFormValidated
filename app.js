const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();

app.engine('mustache', mustacheExpress() )

app.set('view engine', 'mustache');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function(){
  console.log("Server connected!");
});

app.get('/form', function(request, response){
  response.render('form', {pageTitle: "Home page"});

})

app.post('/thankyou', function(request, response){

  response.render("thankyou", {
    name: request.body.name,
    email: request.body.email,
    birthYear: request.body.birthYear,
    position: request.body.position,
    password: request.body.password
  });
});
