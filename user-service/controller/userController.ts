import { Request, Response } from 'express';
import { User } from '../model/userModel';
import { sendMessageToKafka } from '../kafka/producer';

export const user = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const exists = await User.findOne({ email });
        
        if (!exists) {
            const newUser = new User({ email, password });
            const savedUser = await newUser.save();
            
            
            await sendMessageToKafka('user-created-topic', { userId: savedUser._id });
            res.status(200).json({ id: savedUser._id });
        }
        
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
};
