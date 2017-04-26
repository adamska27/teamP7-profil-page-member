const express    = require("express");
const pg         = require('pg');
const bodyParser = require("body-parser");
const app        = express();
const pgURL      = process.env.DATABASE_URL || 'postgres://faustino:faustino@localhost:5432/p7team';
const router     = express.Router();

app.use(bodyParser.urlencoded({extended: true }));
app.use('/find', router);
app.use(express.static('./build/'));

app.get('/', (req, res) => {
             res.sendFile(path.join(__dirname, './build'));
            //  res.send(result.rows)
        });

app.get('/users', (req, res) => {
    console.log(pgURL);
    pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('SELECT prenom, nom, skills FROM users ', (error, result) => {
            console.log(error);
             done();
            res.send(result.rows)
        })
    })
});

app.post('/post', (req, res) => {

  const post  = {prenom: req.body.prenom, nom: req.body.nom, skills: req.body.skills, image: req.body.image};
  const stringObjectTransform = (string) => '{'+string.split(' ').join(',')+'}';
  const convertedSkills = stringObjectTransform(req.body.skills);
  console.log('Converted Skills',convertedSkills);
  console.log('Variables', post);
    console.log(pgURL);
    pg.connect(pgURL, (error, client, done) => {
        client.query('INSERT INTO users (prenom, nom, skills, image) VALUES ($1, $2, $3, $4);', [post.prenom, post.nom, convertedSkills, post.image],  (error, result) => {
             done();
             res.send(result);
        })
    })
});

router.route('/:prenom')
    .get((req, res ) =>{
         console.log(pgURL);
        pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('SELECT * FROM users WHERE prenom = $1', [req.params.prenom], (error, result) => {
            console.log(error)
             done();
             res.send(result.rows);
        })
        })
    })
    .put((req, res) =>{
        console.log(pgURL);
        const b = "gotvv";
        pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('UPDATE users SET prenom = $1, nom = $2, skills = $3 WHERE nom = $4', [req.body.prenom, req.body.nom, req.body.skills, req.params.prenom], (error, result) => {
            console.log(error)
             done();
             res.send(result);
        })
        })
    })
    .delete((req, res) =>{
        console.log(pgURL);
        pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('DELETE FROM users WHERE prenom = $1', [req.params.prenom], (error, result) => {
            console.log(error)
             done();
             res.send(result);
        })
        })
    })

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});







app.listen(3005, () =>{
  console.log("The App\'s running on port 3005");
});
