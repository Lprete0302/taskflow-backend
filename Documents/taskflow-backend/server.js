const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes'); // ✅ ADD THIS LINE
const { notFound, errorHandler } = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// ✅ Mount routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes); // ✅ MOUNT TASK ROUTES HERE

// Optional: health check
app.get('/', (req, res) => {
  res.send('🌐 TaskFlow API is live');
});

// ❌ 404 handler
app.use(notFound);

// ❗ Global error handler
app.use(errorHandler);

// ✅ PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
