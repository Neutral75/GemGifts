const initializeApp = require('firebase/app');
const getAnalytics = require('firebase/analytics');
const express = require('express');
const path = require('path');

const app = express();

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const firebaseConfig = {
  apiKey: "AIzaSyCzDj2viWa6xGTS5jFujq9yk28vn1BlO1E",
  authDomain: "gemgifts-id.firebaseapp.com",
  projectId: "gemgifts-id",
  storageBucket: "gemgifts-id.appspot.com",
  messagingSenderId: "589017717040",
  appId: "1:589017717040:web:583d99376a62b6567f50f5",
  measurementId: "G-FWQEKG7ZLC"
};

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './Website')));

app.set('views', path.join(__dirname, './Website'));
app.set('view engine', 'ejs');

app.get('/', async (request, response) => {
    return response.render('home');
});

app.get('/home', async (request, response) => {
    return response.render('home');
});