const { fetchFilteredResponses } = require('../services');

const getFilteredResponses = async (req, res) => {
    const { formId } = req.params;
    const { filters, limit = 150, offset = 0, ...params } = req.query;
    try {
        const responses = await fetchFilteredResponses(formId, params, filters, limit, offset);
        res.json(responses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getFilteredResponses };