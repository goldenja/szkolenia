const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const users = [{
    name: "Zaphod Beeblebrox",
    password: "42",
    role: "admin",
    email: "zaphod@gmail.com"
}];

app.use(cors());

dotenv.config();

function generateToken(data) {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.use(express.json());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get('/user', authenticateJWT,(req, res) => {
    const {email} = req.user;

    const user = users.find(u => u.email === email);

    if(user){
        res.json({
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    }else{
        res.status(401).send('Account does not exist');
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = generateToken({role: user.role, email: user.email, name: user.name});

        res.json({
            accessToken: token,
            user: {
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } else {
        res.status(401).send('Username or password incorrect');
    }
});

app.listen(3001, () => {
    console.log('Authentication service started on port 3000');
});

