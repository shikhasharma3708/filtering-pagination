const express = require('express');
const app = express();
const port = 3002;

const data = [
    { id: 1, name: 'Item 1', category: 'A', value: 10 },
    { id: 2, name: 'Item 2', category: 'B', value: 20 },
    { id: 3, name: 'Item 3', category: 'A', value: 30 },
    { id: 4, name: 'Item 4', category: 'C', value: 40 },
    { id: 5, name: 'Item 5', category: 'B', value: 50 },
    { id: 6, name: 'Item 6', category: 'A', value: 60 },
    { id: 7, name: 'Item 7', category: 'C', value: 70 },
    { id: 8, name: 'Item 8', category: 'B', value: 80 },
];

app.get('/', (req, res) => {
    res.send('Welcome to my server. Use /data to get filtered and paginated data.');
});

app.get('/data', (req, res) => {
    const { page = 1, limit = 3, category } = req.query;

    let filteredData = category ? data.filter(item => item.category === category) : data;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.json({
        page: parseInt(page),
        limit: parseInt(limit),
        totalItems: filteredData.length,
        data: paginatedData
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
