🛠️ AC Repairing Services
🚀 Full Stack Web Application

A modern Full Stack Web Application built for managing AC repairing services, bookings, and operations using Next.js and Node.js (Express).

📌 Project Overview

Project Type: Full Stack Web Application

Architecture: Frontend + Backend (REST APIs)

Environment: Development & Production Ready

🧰 Tech Stack
⚙️ Backend

Runtime: Node.js v22.18.0

Framework: Express.js

API Type: REST APIs

🎨 Frontend

Framework: Next.js (Latest)

Routing: App Router

UI Library: Bootstrap

Styling: SCSS / CSS (No Tailwind)

📁 Project Structure
project-root/
│
├── frontend/                  # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   ├── public/
│   │   └── styles/
│   ├── package.json
│   └── next.config.js
│
├── backend/                   # Node.js + Express Backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── config/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── README.md

✅ Requirements

🟢 Node.js: v22.18.0 (recommended via nvm)

📦 npm: Comes with Node.js

🧑‍💻 Git: Optional but recommended

🔄 Node Version Setup (nvm)

Check installed Node versions:

nvm ls


Use required version:

nvm use 22.18.0


Verify:

node -v


✔️ Should output: v22.18.0

🌐 Frontend Setup (Next.js)

1️⃣ Navigate to frontend directory:

cd frontend


2️⃣ Install dependencies:

npm install


3️⃣ Start development server:

npm run dev


4️⃣ Open in browser:

http://localhost:3000

🔧 Backend Setup (Express)

1️⃣ Navigate to backend directory:

cd backend


2️⃣ Install dependencies:

npm install


3️⃣ Create .env file:

PORT=5000


4️⃣ Start backend server:

npm run dev


or

node src/server.js


5️⃣ Backend URL:

http://localhost:5000

🔗 API Connection Flow
Frontend (Next.js) → http://localhost:3000
Backend  (Express) → http://localhost:5000/api


Frontend communicates with backend using REST APIs.

📜 Available Scripts
🖥️ Frontend
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run start	Run production build
🛠️ Backend
Command	Description
npm run dev	Start with nodemon
npm start	Start production server
📝 Notes

✅ Bootstrap used for UI components

🎨 Styling via SCSS / CSS

🚫 Tailwind CSS not used

⚡ Node.js v22.18.0 recommended for stability

🔁 Restart terminal after switching Node versions

👨‍💻 Author

Dhruvil Patel
🔹 Full Stack Web Developer
Yashvi Kodak 
🔹 Frontend Web Developer
 
