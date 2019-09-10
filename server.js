const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Helo Iago');
});

app.listen(3001);