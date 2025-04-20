# 👑 QueenLive Real-Time Live Commerce Platform

QueenLive is a real-time live commerce platform that simulates a shopping experience with live chat functionality and order notifications. It allows users to interact with products and receive real-time updates about their orders, making the shopping experience more dynamic and engaging.

---

## 📦 Tech Stack

- **Frontend**: 
  - **Next.js** for server-side rendering and React-based UI
  - **Tailwind CSS** for responsive, utility-first styling
  - **Socket.IO** for real-time communication (chat and notifications)

- **Backend**:
  - **NestJS** for building scalable APIs with TypeScript
  - **TypeORM** for managing MySQL database connections
  - **MySQL** for storing orders and product information
  - **Socket.IO** for handling real-time updates like chat messages and order notifications

---

## ✨ Features Checklist

✅ **Live chat UI** for seamless communication between users and admins  
✅ **Real-time messaging** with Socket.IO ensuring instant communication  
✅ **Order button** triggers a POST request to process orders  
✅ **Real-time order notifications** for users once they place an order  
✅ **Orders stored in MySQL** and managed with TypeORM for easy querying  
✅ **Frontend deployed to Vercel** for scalable and fast deployment  
✅ **Complete README** covering setup, Socket.IO usage, and API specs  

---

## 🛠 Setup Instructions

### ⚙️ Backend (NestJS + MySQL + Socket.IO)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/queenlive-fullstack.git
Navigate to the backend folder:

bash
Copy
Edit
cd queenlive-fullstack/backend
Install dependencies:

bash
Copy
Edit
npm install
Set up your environment:

Create a .env file in the root of the backend directory and add the following:

env
Copy
Edit
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_DATABASE=queenlive
Run the backend:

Start the server in development mode (watch mode with hot reload):

bash
Copy
Edit
npm run start:dev
⚙️ Frontend (Next.js + Tailwind CSS + Socket.IO)
Navigate to the frontend folder:

bash
Copy
Edit
cd ../frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the frontend:

Start the frontend development server:

bash
Copy
Edit
npm run dev
Frontend UI:

The frontend is built using Next.js and Tailwind CSS. The app will be available at http://localhost:3000.

The live chat feature uses Socket.IO to send and receive messages in real-time. Orders can also be placed through the frontend, which will trigger real-time notifications.

💬 How to Use the Real-Time Chat Feature
Open the app in two different tabs (or different browsers).

Send a message from one tab – it will be displayed in real-time in the second tab, demonstrating the live communication feature.

Click on the order button to place an order. The backend will process the order and send a notification to the frontend.

📝 API Endpoints
POST /orders: Place a new order

Request Body:

json
Copy
Edit
{
  "productId": 1,
  "quantity": 2
}
Response:

json
Copy
Edit
{
  "status": "Order placed successfully",
  "orderId": 123
}
GET /orders: Get all orders

Response:

json
Copy
Edit
[
  {
    "id": 1,
    "productId": 1,
    "quantity": 2,
    "status": "Placed"
  },
  {
    "id": 2,
    "productId": 2,
    "quantity": 1,
    "status": "Processing"
  }
]
🚀 Deployment
Frontend: Deployed on Vercel for quick and scalable deployment.

Backend: You can deploy the backend using platforms like Heroku, AWS, or DigitalOcean.

🛠 Development Tools
VS Code for code editing (recommended extensions: ESLint, Prettier, and Docker)

Postman for API testing

🔧 Troubleshooting
If you encounter issues with Socket.IO, make sure both frontend and backend are running on the correct ports (frontend: 3000, backend: 3001/3002). Check that the .env file is correctly configured and the database is accessible.

🤝 Contributing
If you'd like to contribute to the development of QueenLive, please feel free to fork this repository and submit a pull request. Make sure to follow the coding standards and test your changes thoroughly.

📝 License
This project is open-source and available under the MIT License.

markdown
Copy
Edit

### Explanation of Updates:
- **Interactive Sections**: I added instructions on how to use the real-time chat feature, highlighting how it works across two browser tabs and how to place an order.
- **API Endpoints**: Added a sample API section for `/orders` to explain how to interact with the backend.
- **Setup**: I included detailed steps for both the backend and frontend setup.
- **Deployment**: Provided instructions for deploying the project, including the use of Vercel for the frontend and other platforms for the backend.
- **Development Tools**: Recommended tools like VS Code and Postman for smooth development and testing. 

This updated README should help anyone setting up the project on their own system.
