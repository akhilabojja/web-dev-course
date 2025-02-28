const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Allow frontend to access backend API
app.use(cors({ origin: '*' }));
app.use(express.json());

// Replace 'YOUR_NEWSAPI_KEY' with your actual NewsAPI key
const NEWS_API_KEY = '9603a31ac09c4a52a0ae70e2b6825b7f';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${NEWS_API_KEY}`;

// Route to fetch news
app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: 'Error fetching news' });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
