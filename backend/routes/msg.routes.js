import express from 'express';
import { sendMsg, getMsg } from '../controlllers/msg.js';
import protectRoute from '../middlewares/protectRoute.js'

const router = express.Router();

router.get("/:id", protectRoute, getMsg);
router.post("/send/:id", protectRoute, sendMsg);

export default router;
