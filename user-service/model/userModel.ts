import mongoose from 'mongoose';

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

export const User = mongoose.model('User', userModelSchema);

mongoose.connect('mongodb://localhost:27017/kafka-user')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


