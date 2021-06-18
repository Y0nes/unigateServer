const firebase = require('firebase');
const admin = require('firebase-admin');
const config = require('./config');
const serviceAccount = require('./unigate-a7e38-firebase-adminsdk-9g2km-3cf0dc8c29.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const database = firebase.initializeApp(config.firebaseConfig);

module.exports = {
    database : database,
    admin  : admin
};