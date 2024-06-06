import { Kafka } from 'kafkajs';
import { createCart } from '../controller/cartController';

const kafka = new Kafka({
  clientId: 'cart-service',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'cart-group' });

export const initConsumer = async () => {
  try {
    await consumer.connect();
    console.log('Kafka consumer connected');
    
    await consumer.subscribe({ topic: 'user-created-topic' });
    console.log('Subscribed to topic: user-created-topic');
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const { userId } = JSON.parse(message?.value?.toString() || '{}');
          console.log(`Received userId: ${userId}`);
          
          await createCart(userId);
        } catch (error) {
          console.error('Error processing Kafka message:', error);
        }
      },
    });

    console.log('Kafka consumer running');
  } catch (error) {
    console.error('Error initializing Kafka consumer:', error);
  }
};

initConsumer();
