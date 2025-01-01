const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Rotas
app.use('/tasks', taskRoutes);
app.use('/users', authRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
