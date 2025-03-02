import express, { Request, Response } from "express";
import { encode, decode } from "../controllers/urlController";

const router = express.Router();

router.post("/encode", encode);
router.post("/decode", decode);
export default router;
