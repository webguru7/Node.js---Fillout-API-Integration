// Helper function to apply filters to the responses
const applyFilters = (responses, filters) => {
    return responses.filter(response => {
        return filters.every(filter => {
            const question = response.questions.find(q => q.id === filter.id);
            if (!question) return false;

            let { value } = question;
            let { value: fValue } = filter;
            switch (filter.condition) {
                case 'equals':
                    return value === fValue;
                case 'does_not_equal':
                    return value !== fValue;
                case 'greater_than':
                    return value > fValue;
                case 'less_than':
                    return value < fValue;
                default:
                    return false;
            }
        });
    });
};

module.exports = {
    applyFilters
};