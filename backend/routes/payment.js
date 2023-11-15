import express from 'express'
;
import stripe from 'stripe';

const stripeSecretKey = '';
const stripeClient = new stripe(stripeSecretKey);
const route=express.Router()

route.post("/payment",async(req,res)=>{
    const {products} = req.body;
    console.log(products);

    // Check if product.publishYear is a valid number
    
    console.log(products._id);
        
    

    try {
        const session = await stripeClient.checkout.sessions.create({
            
                line_items: [
                    {
                        price_data:{
                            currency:"inr",
                            product_data:{
                                name:products.title,
                                images:[products.image]
                            },
                            unit_amount:products.price * 100,
                        },
                        quantity:products.quantity
                    }
                  ],

            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating a session:", error);
        res.status(500).json({ error: 'Unable to create a payment session' });
    }
    
})
route.post("/payment_cart",async(req,res)=>{
    const {products} = req.body;
    

    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.title,
                images:[product.image]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));
        
    

    try {
        const session = await stripeClient.checkout.sessions.create({
            
                line_items:lineItems,

            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating a session:", error);
        res.status(500).json({ error: 'Unable to create a payment session' });
    }
    
})
export default route;