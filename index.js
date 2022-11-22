const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const user = require('./Schemas/user');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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

app.get('/login', async (request, response) => {
    response.redirect('https://discord.com/api/oauth2/authorize?client_id=1043619590216884315&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=token&scope=identify%20email')
});

app.get('/auth', async (request, response) => {
    return response.render('dashboard/auth');
});

app.get('/data', async ({ query }, response) => {
    const { avatar, email, id } = query;

    if (!id) {
        return response.redirect('login')
    };

    const userFind = await user.findOne({
        id: id,
    });

    if (userFind) {
        console.log('User found!');
    } else {
        const userCreate = await user.create({
            avatar: avatar,
            id: id,
            email: email,
            date: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })
        });

        console.log('User created!');
    };

    return response.redirect('dashboard/profile');
});

app.get('/dashboard/profile', async (request, response) => {
    return response.render('Dashboard/profile');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Beep!');
});