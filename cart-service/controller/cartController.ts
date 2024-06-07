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



export const addToCart = async (req: Request, res: Response) => {
  try {
    const { id, productId, productName, category, price } = req.body;
console.log("s")
    const cart = await Cart.findOne({ userId: id });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found for the user' });
    }

    cart.products.push({ productId, productName, category, price });

    await cart.save();
    console.log("saved")

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getCart = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        console.log(id, "getting or not");
        const cartData = await Cart.findOne({ userId: id });

        if (cartData) {
            const products = (cartData as any).products; // Explicitly cast to any
            res.json({ products });
        } else {
            res.json({ products: [] }); // Return empty array if cartData is null
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}