const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // For demonstration, accept any username/password
    if (username && password) {
        res.json({ message: 'Logged in successfully' });
    } else {
        res.json({ message: 'Login failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
