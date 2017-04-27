const express    = require("express");
const pg         = require('pg');
const bodyParser = require("body-parser");
const app        = express();
const pgURL      = process.env.DATABASE_URL || 'postgres://iaekvsjyyychdl:243951ea2a84e89622c389bcdfc0fd9796242f34a698fb5ca8d04fd91472fb1f@ec2-176-34-113-15.eu-west-1.compute.amazonaws.com:5432/d500j5voi65rko';

const apiRoutes = express.Router();

app.use(bodyParser.urlencoded({extended: true }));
app.use('/api', apiRoutes);
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
        .query('SELECT * FROM users ', (error, result) => {
            console.log(error);
             done();
            res.send(result.rows)
        })
    })
});

app.post('/post', (req, res) => {
  const post  = {prenom: req.body.prenom, nom: req.body.nom, skills: req.body.skills, image: req.body.image, description: req.body.description, repogithub: req.body.repogithub, urlgithub: req.body.urlgithub, disponibilite: req.body.disponibilite};
  const stringObjectTransform = (string) => '{'+string.split(' ').join(',')+'}';
  const convertedSkills = stringObjectTransform(req.body.skills);
  console.log('Converted Skills',convertedSkills);
  console.log('Variables', post);
    console.log(pgURL);
    pg.connect(pgURL, (error, client, done) => {
        client.query('INSERT INTO users (prenom, nom, image, skills, description, repogithub, urlgithub, disponibilite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [post.prenom, post.nom, post.image, convertedSkills, post.description, post.repogithub, post.urlgithub, post.disponibilite],  (error, result) => {
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
//         .query('CREATE TABLE users(id serial PRIMARY KEY, prenom CHARACTER (90), nom CHARACTER (90), image CHARACTER (500), skills TEXT[], description CHARACTER (500), repogithub CHARACTER (100), urlgithub CHARACTER (500), disponibilite DATE)', (error, result) => {
//              done();
//              res.send(result);
//         })
//     })
// });

apiRoutes.route('/:id') 
    .get((req, res ) => {
         console.log(pgURL);

        pg.connect(pgURL, (error, client, done) => {
        console.log(error);
        client.query('SELECT * FROM users WHERE id = $1', [req.params.id], (error, result) => {
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
        client.query('UPDATE users SET prenom = $1, nom = $2, image = $3, skills = $4, description = $5, repogithub = $6, urlgithub = $7, disponibilite = $8 WHERE id = $9', [req.body.prenom, req.body.nom, req.body.image, req.body.skills, req.body.description, req.body.repogithub, req.body.urlgithub, req.body.disponibilite, req.params.id], (error, result) => {
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
        client.query('DELETE FROM users WHERE id = $1', [req.params.id], (error, result) => {
            console.log(error)
             done();
             res.send(result);
        })
        })
    })


// router.use((req, res, next) => {
//     console.log('Sub-route running on.');
//     next();
// });

app.listen(3004, () =>{ console.log("The App\'s running on port 3004");});