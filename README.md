# Threadbase - Upload Server Starter

Starter repo for **LU 4.9 - File Upload with multer**.

`verifyToken` and a demo login already work. multer is **not** installed. There is no upload route and no static serving. Your job: install multer, configure storage + filter + limit, write `POST /api/upload` behind auth, and serve `uploads/` statically.

## Setup

```bash
cp .env.example .env
npm install
npm start        # http://localhost:3001
```

## Get a token

```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"ada","password":"password"}'
```

Copy the `token` from the response and use it as `Authorization: Bearer <token>`.

## Files to create or edit

| File | What to do |
|------|------------|
| `config/upload.js` | Create - multer instance (diskStorage + fileFilter + limits) |
| `routes/upload.routes.js` | Create - `POST /api/upload` with `verifyToken` then `upload.single("avatar")` |
| `server.js` | Wire `express.static("uploads")` and the upload route (see TODOs) |

Do **not** edit `middleware/auth.js`.

## Test your work

In Thunder Client / Postman: `POST /api/upload`, `Authorization: Bearer <token>`, body type **form-data**, field `avatar` (type: file) with an image. You should get a 201 with a `url`. Paste `http://localhost:3001<url>` in the browser - the image opens. A PDF should be rejected with 400. No token should give 401.
# threadbase-upload-server-starter
