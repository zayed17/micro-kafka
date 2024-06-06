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
mongoose.connect('mongodb+srv://mzayed9745:0J9ABbpJPGUftNZq@cluster0.pri7ci3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


