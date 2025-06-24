const express = require('express');
const router = express.Router();

router.get('/error', (req, res) => {
  try {
    throw new Error('Error intencional');
  } catch (error) {
    res.status(500).send('Algo salió mal.');
    throw error;
  }
});

module.exports = router;
