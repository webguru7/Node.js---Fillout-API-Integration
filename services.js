const axios = require('axios');
const { applyFilters } = require('./utils');

const fetchFilteredResponses = async (formId, params, filters, limit, offset) => {
    const url = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;

    try {
        const response = await axios.get(url, {
            params,
            headers: {
                Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`
            }
         });
        let filteredResponses = response.data.responses;

        if (filters) {
            const parsedFilters = JSON.parse(filters);
            filteredResponses = applyFilters(filteredResponses, parsedFilters);
        }

        // Adjust the totalResponses and pageCount based on the filters
        const totalResponses = filteredResponses.length;
        const pageCount = Math.ceil(totalResponses / limit);

        // Return only the subset of responses based on pagination
        const paginatedResponses = filteredResponses.slice(offset, offset + limit);

        return {
            responses: paginatedResponses,
            totalResponses,
            pageCount,
        };
    } catch (error) {
        console.error('Error fetching filtered responses:', error);
        throw new Error('Failed to fetch filtered responses');
    }
};

module.exports = {
    fetchFilteredResponses
};