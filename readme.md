# Fillout API Integration Project

## Overview

This Node.js project demonstrates a simple REST API server setup to interact with the Fillout.com API. It fetches form responses and allows filtering based on specified criteria. Built with Express.js, it serves as an extension to the existing Fillout API capabilities by adding a custom filtering option for form responses.

## Live Server Example
[https://node-js-fillout-api-integration.onrender.com/cLZojxk94ous/filteredResponses?filters=[{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-03-01"}]&limit=2](https://node-js-fillout-api-integration.onrender.com/cLZojxk94ous/filteredResponses?filters=[{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-03-01"}]&limit=2)

## Features

- Fetch responses for a specific form from Fillout.com.
- Apply custom filters to the responses based on provided query parameters.
- Support for pagination in the response data to handle large sets of form responses efficiently.

## Getting Started

### Prerequisites

- Node.js (version 20 or newer recommended)
- npm (comes with Node.js)

### Installation

1. **Install the required dependencies**

   ```sh
   npm install
2. **Setup environment variables:** 
   Create a .env file in the project root and add your Fillout API key:
   ```sh
   API_KEY=your_fillout_api_key_here
3. **Running the Server:**
   To start the server locally, run
   ```sh
   npm start
The server will be accessible at http://localhost:3000.

## Usage
To fetch and filter form responses, make a GET request to /{formId}/filteredResponses with the appropriate query parameters for filtering.

### Example Request
   ```sh 
   http://localhost:3000/cLZojxk94ous/filteredResponses?filters= [{"id":"questionId","condition":"equals","value":"Answer"}]
   ```
