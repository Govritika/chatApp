import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import {getUsersOnSidebar}  from '../controlllers/users.js';

const router = express.Router();

router.get('/', protectRoute, getUsersOnSidebar);

export default router;

