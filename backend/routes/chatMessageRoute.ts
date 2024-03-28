import express from "express";

import { createMessage, getMessages } from "../controllers/chatMessageController";

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatRoomId", getMessages);

export default router;
