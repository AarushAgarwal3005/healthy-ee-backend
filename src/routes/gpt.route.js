import express from 'express';
import {sendGeminiRequest} from '../controllers/gptController.js';

const router = express.Router();

// Define the route and connect it to the controller function
router.route("/chat")
    .post(sendGeminiRequest)

export default router;

