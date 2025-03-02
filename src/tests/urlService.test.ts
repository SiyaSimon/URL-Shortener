const { encodeURL, decodeURL } = require("../services/urlService");

describe("URL Shortener Service", () => {
  test("should encode a URL", () => {
    const originalUrl = "https://example.com";
    const { shortUrl } = encodeURL(originalUrl);
    expect(shortUrl).toContain("http://short.est/");
  });

  test("should decode a short URL", () => {
    const originalUrl = "https://example.com";
    const { shortUrl } = encodeURL(originalUrl);
    const decoded = decodeURL(shortUrl);
    expect(decoded.originalUrl).toBe(originalUrl);
  });

  test("should return an error for unknown short URLs", () => {
    const result = decodeURL("http://short.est/unknown123");
    expect(result.error).toBe("Short URL not found");
  });
});
