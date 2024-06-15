import mongoose from 'mongoose';

// Define the user schema
const userModelSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create the User model
export const User = mongoose.model('User', userModelSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/kafka-user')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


