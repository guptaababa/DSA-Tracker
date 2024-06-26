const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/question')

const cors = require('cors');
const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Allow requests from frontend
const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200,
};

//Insert questions to DB
const questionController = require('./controllers/question');
questionController.insertQuestions();

app.use(cors(corsOptions));
// Parse JSON request body
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send("Hello World! I'm the backend for the DSA Tracker");
});

// Define authentication routes
app.use('/auth', authRoutes);

// Define user routes
app.use('/user', userRoutes);

app.use('/questions', questionRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});