const nodeFetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    console.log('Serverless function is running.');

    // Set CORS headers to allow requests from any origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    // Fetch data from the external API
    const response = await nodeFetch('https://dummyjson.com/products');
    const data = await response.json();

    // Send the data as JSON in the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
