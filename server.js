const express = require('express');
// const cors = require('cors');
const app = express();
// app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/api', async (req, res) => {
    try {
        const response = await fetch('http://xinga-me.appspot.com/api');
        const data = await response.json();
        console.log(data)
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
