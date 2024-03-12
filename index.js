require('dotenv').config();
const express = require('express');
const { getFilteredResponses } = require('./controllers/forms');

const app = express();
const port = process.env.PORT || 3000;

app.get('/:formId/filteredResponses', getFilteredResponses);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
