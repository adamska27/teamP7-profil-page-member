const express    = require("express");
const pg         = require('pg');
const bodyParser = require("body-parser");
const app        = express();
const pgURL      = process.env.DATABASE_URL || 'postgres://iaekvsjyyychdl:243951ea2a84e89622c389bcdfc0fd9796242f34a698fb5ca8d04fd91472fb1f@ec2-176-34-113-15.eu-west-1.compute.amazonaws.com:5432/d500j5voi65rko';
const router     = express.Router();

app.use(bodyParser.urlencoded({extended: true }));
app.use('/find', router);
app.use(express.static('./build/'));
pg.defaults.ssl = true;




app.get('/', (req, res) => {
             res.sendFile(path.join(__dirname, './build'));
        });

app.get('/users', (req, res) => {
    console.log(pgURL);
    pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client
        .query('SELECT id, prenom, nom, image, skills FROM users ', (error, result) => {
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
        client.query('INSERT INTO users (prenom, nom, image, skills) VALUES ($1, $2, $3, $4);', [post.prenom, post.nom, post.image, convertedSkills],  (error, result) => {
             done();
             res.send(result);
        })
    })
});


///////////ROUTE A NE PAS TOUCHER SVP

// app.post('/create', (req, res) => {
//     // pg.defaults.ssl = true;
//     pg.connect(pgURL, (error, client, done) => {
//         client
//         .query('CREATE TABLE users(id serial PRIMARY KEY, prenom CHARACTER (90), nom CHARACTER (90), image CHARACTER (500), skills TEXT[])', (error, result) => {
//              done();
//              res.send(result);
//         })
//     })
// });

router.route('/:prenom')
    .get((req, res ) =>{
         console.log(pgURL);
         pg.defaults.ssl = true;
        pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('SELECT * FROM users WHERE id = $1', [req.params.prenom], (error, result) => {
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
        client.query('UPDATE users SET prenom = $1, nom = $2, image = $3, skills = $4 WHERE nom = $5', [req.body.prenom, req.body.nom, req.body.image, req.body.skills, req.params.prenom], (error, result) => {
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


router.use((req, res, next) => {
    console.log('Sub-route running on.');
    next();
});

app.listen(3005, () =>{ console.log("The App\'s running on port 3005");});
