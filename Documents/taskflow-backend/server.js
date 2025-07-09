const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { notFound, errorHandler } = require('./middleware/authMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse incoming JSON

// Debug logs
console.log("🔍 ENV PORT:", process.env.PORT);
console.log("🔍 ENV MONGO_URI:", process.env.MONGO_URI);

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🌐 TaskFlow API is live');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server on safe port
const PORT = process.env.PORT || 51111;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
