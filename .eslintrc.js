module.exports = {
    env: {
        browser: false, // Set to true if you're using this in a browser environment as well
        es2021: true,
        node: true, // This line is crucial for Node.js environment
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        // Your custom rules here
    },
};
