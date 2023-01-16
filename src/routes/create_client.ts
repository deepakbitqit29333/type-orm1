import express from "express";
import {Client} from "../entity/client";

const router = express.Router();
router.post('/api/client', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body;
    const client = Client.create({
        firstname: firstName,
        middle_name: lastName,
        email: email,
        card_number: cardNumber,
        balance,
    });

    await client.save();
    return res.json(client)
})
export {
    router as createClientRouter
}