const nodeFetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await nodeFetch('https://dummyjsonapi.com/products');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
