import express from 'express';
import cors from 'cors';
import router from './route/cartRoute';
import { initConsumer } from './kafka/consumer';

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/cart', router);

// Initialize Kafka consumer
initConsumer()
  .then(() => {
    console.log('Kafka consumer initialized successfully');
  })
  .catch((error) => {
    console.error('Failed to initialize Kafka consumer:', error);
  })
  .finally(() => {
    // Start the server regardless of the consumer initialization status
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
