const express = require('express');
const bcrypt = require('bcryptjs');
const { pool } = require('../db');

const router = express.Router();

router.post('/register', async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(400).json({ error: 'Email и пароль обязательны' });
   }

   try {
      const hashedPassword = bcrypt.hashSync(password, 8);

      const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
      const [result] = await pool.execute(query, [email, hashedPassword]);

      res.status(201).json({ message: 'Пользователь зарегистрирован' });
   } catch (err) {
      console.error('Ошибка при регистрации:', err);
      res.status(500).json({ error: 'Ошибка сервера' });
   }
});

module.exports = router;
