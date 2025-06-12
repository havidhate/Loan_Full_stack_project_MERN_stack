# Loan_Full_stack_project_MERN_stack
💼 Loan Application System
A full-stack MERN application that allows users to apply for loans, upload documents, view loan status, and track repayments through a dynamic calendar.

🌟 Features
🧑‍💼 Multi-step Loan Application Form (Personal, Financial, Document)

🔒 JWT-based User Authentication

📂 File Upload (PDF/Image) with multer

📊 Dashboard with Loan Status Tracking

📅 Dynamic Repayment Calendar

📤 Email Notifications (optional)

🧮 Admin-friendly Schema (Mongoose)

🖥️ Fully Responsive Frontend (React + Vite)

🌐 Backend API (Express.js)

☁️ Cloud Ready for Netlify + Render

📁 Project Structure
bash
Copy
Edit
Loan-Application-System/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── vite.config.js
│   └── package.json
⚙️ Tech Stack
Layer	Technology
Frontend	React, Vite
Backend	Node.js, Express.js
DB	MongoDB (Atlas)
Auth	JWT
Upload	Multer
Hosting	Netlify, Render

🚀 Local Setup Guide
✅ Prerequisites
Node.js & npm

MongoDB Atlas account (or local MongoDB)

Git

🔧 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/loan-application-system.git
cd loan-application-system
📦 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
🧪 Create .env in /backend
env
Copy
Edit
PORT=8080
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
▶️ Run Backend
bash
Copy
Edit
node index.js
💻 3. Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
🧪 Create .env in /frontend
env
Copy
Edit
VITE_API_URL=http://localhost:8080/api
▶️ Run Frontend
bash
Copy
Edit
npm run dev
Open: http://localhost:5173

🌐 Deployment Guide
🟨 Backend on Render
Push backend/ to GitHub

Go to https://render.com

Deploy new Web Service

Add environment variables from .env

Add build/start commands:

bash
Copy
Edit
Build Command: npm install
Start Command: node index.js
🟦 Frontend on Netlify
Push frontend/ to GitHub

Go to https://netlify.com

New site → Import from GitHub

Set environment variable:

env
Copy
Edit
VITE_API_URL=https://your-backend-url.onrender.com/api
Set build settings:

yaml
Copy
Edit
Build command: npm run build
Publish directory: dist
🧪 API Reference
🚀 POST /api/auth/signup
Create new user

Body: { name, email, password }

🚀 POST /api/auth/login
Login and get token

Body: { email, password }

🚀 POST /api/loan
Submit a loan form (with file)

Headers: Authorization: Bearer <token>

Body: FormData with fields + document

🚀 GET /api/loan
Fetch all loan applications for a user

🚀 GET /api/calendar
Get repayment schedule for user

📂 File Upload Notes
PDF / JPG / PNG

Max 5MB

Stored in /uploads

Access via:

arduino
Copy
Edit
https://your-backend.com/uploads/filename.pdf
🧠 Dev Tips
After changing .env, rebuild frontend:

bash
Copy
Edit
npm run build
Use CORS properly in index.js:

js
Copy
Edit
const cors = require("cors");

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
🤝 Contributors
Hutesh — Developer, Designer, Architect

Contributions welcome via pull request!

🛡️ License
This project is licensed under the MIT License.
