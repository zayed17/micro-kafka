import { Request,Response} from "express";
import { Cart } from "../model/cartModel";

export const createCart = async(id:string)=>{
    try {
        console.log(id,"userid in cart")
        const existingCart = await Cart.findOne({ userId:id });
        if (!existingCart) {
          const newCart = new Cart({ userId:id, items: [] });
          await newCart.save();
          console.log('cart created')
        }
    } catch (error) {
        console.log(error)
    }
}


export const addToCart = async(req:Request,res:Response)=>{
    try {
       const {productId,productName,category,price} = req.body
       
    } catch (error) {
        console.log(error)
    }
}

