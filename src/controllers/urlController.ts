import { Request, Response } from "express";
import { encodeURL, decodeURL } from "../services/urlService";

export const encode = (req: Request, res: Response): void => {
  const { originalUrl } = req.body;
  if (!originalUrl) {
    res.status(400).json({ error: "originalUrl is required" });
    return;
  }
  res.json(encodeURL(originalUrl));
};

export const decode = (req: Request, res: Response): void => {
  const { shortUrl } = req.body;
  if (!shortUrl) {
    res.status(400).json({ error: "shortUrl is required" });
    return;
  }
  const result = decodeURL(shortUrl);
  if (result.error) res.status(404).json(result);
  else res.json(result);
};
