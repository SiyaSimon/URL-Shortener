const urlDatabase = new Map<string, string>(); // Stores URLs in memory
const baseUrl = process.env.BASE_URL || "http://short.est/";

// Generate a short ID
const generateShortId = (): string => Math.random().toString(36).substring(2, 8);

// Encode a URL
export const encodeURL = (originalUrl: string): { shortUrl: string } => {
  for (const [key, value] of urlDatabase.entries()) {
    if (value === originalUrl) return { shortUrl: baseUrl + key };
  }
  const shortId = generateShortId();
  urlDatabase.set(shortId, originalUrl);
  return { shortUrl: baseUrl + shortId };
};

// Decode a URL
export const decodeURL = (shortUrl: string): { originalUrl?: string; error?: string } => {
  const shortId = shortUrl.replace(baseUrl, "");
  const originalUrl = urlDatabase.get(shortId);
  return originalUrl ? { originalUrl } : { error: "Short URL not found" };
};
