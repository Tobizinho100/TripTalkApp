const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');  // Adicionado para ajudar com o caminho absoluto
const { User } = require('./models');
const authRoutes = require('./routes/auth');

// Carregando variáveis de ambiente com caminho absoluto para garantir que funcione
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined. Check your .env file and its path.');
}

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`JWT_SECRET loaded: ${JWT_SECRET ? 'Yes' : 'No'}`);
});
