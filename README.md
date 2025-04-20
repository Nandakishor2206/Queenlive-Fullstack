# 👑 QueenLive Real-Time Live Commerce Platform

This project simulates a live commerce shopping experience with real-time chat and order notifications.

---

## 📦 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Socket.IO
- **Backend**: NestJS, TypeORM, MySQL, Socket.IO

---

## ✨ Features Checklist

✅ Live chat UI  
✅ Real-time messaging using Socket.IO  
✅ Order button that triggers a POST request  
✅ New order notifications in real-time  
✅ Orders stored in MySQL using TypeORM  
✅ Frontend deployed to Vercel  
✅ Complete README with setup, socket usage, and API specs  

---

## 🛠 Setup Instructions

### ⚙️ Backend (NestJS + MySQL + Socket.IO)

```bash
cd backend
npm install
# Create a .env file with DB credentials:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USERNAME=root
# DB_PASSWORD=yourpassword
# DB_DATABASE=queenlive
npm run start:dev
