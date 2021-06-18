'use strict';
const express = require('express')
const bodyPasrser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const signin = require('./Components/signin')
const qrcode = require('./Components/qrcode')
// const Professor = require('./routes/Professors_route')
const proff = require('./Components/ProfessorsController')


// middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyPasrser.json());

// app.use('/api', Professor.routes);

app.get('/professor', proff.getProfessors)

app.post('/professor', signin.auth())

app.post('/professor/addnew', proff.addProfessor())

app.post('/qrcode', qrcode.handleUuid())

app.listen(config.port, ()=> {
    console.log(`app is running on port ${config.port}`)
});



