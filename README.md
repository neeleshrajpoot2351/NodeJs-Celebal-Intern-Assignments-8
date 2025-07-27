# 📁 Assignment 8 – Express.js App with Authentication, File Upload & Weather API 🌦️

> ✅ Developed by **Neelesh** (CSI ID: CT_CSI_NJ_5765)

This project is part of the Celebal Technologies internship and extends a basic Express.js web application with the following **advanced features**:

- ✅ JWT-based Authentication  
- ✅ File Upload System (via `multer`)  
- ✅ Weather Info Integration (via OpenWeatherMap API)  
- ✅ Frontend enhancements using HTML & CSS

---

## 🚀 Features

| Feature              | Description                                                  |
|---------------------|--------------------------------------------------------------|
| 🔐 Login             | Secure JWT-based login with protected routes                 |
| 📁 File Upload       | Upload single file (e.g., PDF, image, etc.)                  |
| 🌦️ Weather API       | Fetch live weather by city (via OpenWeatherMap API)          |
| 🎨 Frontend UI       | User-friendly web page for uploads and interactions          |

---

## 🧪 Default Test Credentials

To test the protected route:

**POST** `/auth/login`

**Default Credentials** (configured in `authController.js`):

- **Username**: `testuser`  
- **Password**: `testpass`

You will receive a JWT token in response. Use it in the Authorization header as:


neelesh-assignment-8/
├── public/              → Frontend HTML/CSS
├── uploads/             → Uploaded files (gitignored)
├── routes/              → Route definitions
├── controllers/         → Business logic
├── middleware/          → Error handling, JWT verification
├── server.js            → Main server entry point
├── .env                 → Environment config (excluded from Git)
├── .gitignore           → Git ignore file
├── README.md            → This file
