require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://hagiwear.com', 'https://test.hagiwear.com'],
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.options('*', cors());

app.use(express.json());

// ✅ Роуты
app.use('/api', authRoutes);

// ✅ Корневой маршрут
app.get('/', (req, res) => {
  res.send('✅ Hagiwear backend is running!');
});

// ✅ Старт
app.listen(PORT, () => {
  console.log(`✅ Сервер работает на порту ${PORT}`);
});

