# Mini E-Commerce Application

A professional, streamlined MERN stack e-commerce application designed for academic submission. This project is focused on core functionality, clean code, and robust role-based access control.

## 🚀 Tech Stack

- **Frontend**: React.js, Redux Toolkit, React Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens) with HTTP-Only Cookies

## ✨ Features

### Buyer Flow
- **Authentication**: Secure Register and Login system.
- **Product Discovery**: Browse products with search functionality and pagination.
- **Cart Management**: Add/remove items and adjust quantities.
- **Order Lifecycle**: Simplified checkout flow (Shipping -> Place Order).
- **History**: View personal order history and status.

### Admin Flow
- **Product Management**: Full CRUD (Create, Read, Update, Delete) for the product catalog.
- **Order Management**: View all customer orders and update status from `Pending` to `Delivered`.
- **User Management**: View all registered users and assign/revoke `Admin` roles.

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v24 recommended)
- MongoDB (Local or Atlas)

### Backend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
3. Seed the database (Optional):
   ```bash
   npm run data:import
   ```
4. Start the server:
   ```bash
   npm run server
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   npm install --prefix frontend
   ```
2. Start the client:
   ```bash
   npm run client
   ```

## 📂 Folder Structure 

```text
├── backend/           # Express server, models, and routes
│   ├── controllers/   # Request handling logic
│   ├── middleware/    # Auth and error handlers
│   ├── models/        # Mongoose schemas (User, Product, Order)
│   └── routes/        # API endpoints
├── frontend/          # React application
│   ├── src/
│   │   ├── components/# Reusable UI elements
│   │   ├── screens/   # Page-level components
│   │   └── slices/    # Redux state management (RTK Query)
└── uploads/           # Product image storage
```


