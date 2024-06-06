import mongoose from 'mongoose';

const productModelSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Product = mongoose.model('Product', productModelSchema);

mongoose.connect('mongodb+srv://zayed17:zayed%40100@cluster0.j3wffyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));
