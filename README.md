```md
# 🚀 URL Shortener Service  

A simple URL shortening service built with **Node.js, Express, and TypeScript**.  

## ✨ Features  
- Shorten long URLs into short, unique links  
- Decode shortened URLs back to their original form  
- In-memory storage (no database needed)  
- Fully tested with Jest  

## 🏗️ Project Structure  

```txt
url-shortener/
│── src/
│   ├── controllers/       # Handles request processing
│   │   ├── urlController.ts
│   ├── routes/            # Defines API routes
│   │   ├── urlRoutes.ts
│   ├── services/          # Business logic
│   │   ├── urlService.ts
│   ├── tests/             # Unit tests
│   │   ├── urlService.test.ts
│   ├── app.ts             # Express application setup
│   ├── server.ts          # Server entry point
│── package.json           # Dependencies
│── tsconfig.json          # TypeScript config
│── jest.config.ts         # Jest config
│── README.md              # Documentation
```

## 🚀 Getting Started  

### 1️⃣ Install Dependencies  
```sh
npm install
```

### 2️⃣ Run the Server  
```sh
npm start
```
The server will run on `http://localhost:3000`.  

### 3️⃣ API Endpoints  

#### **Encode a URL**  
- **Endpoint:** `POST /encode`  
- **Request Body:**  
  ```json
  { "url": "https://example.com" }
  ```
- **Response:**  
  ```json
  { "shortUrl": "http://short.est/a1b2c3" }
  ```

#### **Decode a Short URL**  
- **Endpoint:** `POST /decode`  
- **Request Body:**  
  ```json
  { "shortUrl": "http://short.est/a1b2c3" }
  ```
- **Response:**  
  ```json
  { "originalUrl": "https://example.com" }
  ```

## 🧪 Running Tests  
```sh
npm test
```
This will run unit tests using Jest.

## 🛠️ Additional Notes  

- To test the API, you can use **Postman**, **curl**, or any API client.  
- If using `.env` for environment variables (e.g., `BASE_URL`), ensure you create a `.env` file.  
  ```sh
  BASE_URL=http://short.est/
  ```
  
---
```

