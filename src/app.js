const express = require('express');
const app = express();
const logger = require('../config/logger');
const errorHandler = require('./errorHandler');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use('/api', apiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Servidor corriendo en puerto ${PORT}`);
});
