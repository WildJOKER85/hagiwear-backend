require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS для разрешённых доменов
app.use(cors({
  origin: ['http://localhost:3000', 'https://hagiwear.com', 'https://test.hagiwear.com'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());

// ✅ Подключение маршрутов
app.use('/api', authRoutes);

// ✅ Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер работает на порту ${PORT}`);
});
