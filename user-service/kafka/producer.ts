import {Kafka}  from 'kafkajs'

const kafka = new Kafka({
    clientId:'user-service',
    brokers:['localhost:9092']
})

const producer = kafka.producer()

export const sendMessageToKafka = async(topic:string,message:any)=>{
    try {
        await producer.connect()
        await producer.send({
            topic,
            messages:[{value:JSON.stringify(message)}]
        })
        console.log("send successfully from provider")
    } catch (error) {
        console.log('error message in userProducer',error)
    }finally{
        await producer.disconnect()
    }
}