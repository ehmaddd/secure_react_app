import { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { id } = req.query;
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  console.log(id);

  // try {
  //   // Convert the id to a number if needed
  //   const productId = parseInt(id, 10);

  //   // Your existing code for fetching product details
  //   console.log(productId);
  //   // res.status(200).json(data);
  // } catch (error) {
  //   console.error('Error fetching product details:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
};
