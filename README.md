# Pantry Ping

Welcome to **Pantry Ping**, the ultimate beverage ordering solution designed to bring your favorite drinks right to your desk! 🚀

## 🌟 Overview

**Pantry Ping** is a streamlined web application tailored for office environments, enabling employees to effortlessly order beverages from the cafeteria with just a few clicks. No more long waits or miscommunications—Pantry Ping ensures your drink is prepared and delivered swiftly, allowing you to stay focused and productive.

## 🎯 Features

- **User Authentication**: Secure sign-up and login process, exclusively for `@fosteringlinux.com` email addresses.
- **Smooth Onboarding**: New users receive a confirmation email to verify their account.
- **Instant Orders**: Select from a variety of drinks and place your order in seconds.
- **Order Tracking**: Monitor the status of your order in real-time.
- **Admin Notifications**: Automatic email notifications sent to the admin upon order placement.
- **Password Recovery**: Forgot your password? No worries! Easily reset it via email.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/pantry-ping.git
    cd pantry-ping
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory with the following content:
    ```env
    MONGO_URI=your_mongodb_uri
    EMAIL=your_email
    EMAIL_PASSWORD=your_email_password
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. **Start the server**:
    ```sh
    npm start
    ```

5. **Access the application**:
    Open your browser and navigate to `http://localhost:5000`

## 💻 Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer

## 📸 Screenshots

### Landing Page
![landingPage](https://github.com/user-attachments/assets/60533b3a-b42f-4e34-8fa1-052e44376cd7)


### Dashboard
![HomePage](https://github.com/user-attachments/assets/5dd93fcd-e7a9-45fe-9be4-74ecbddd018e)
### Order Status
![StatusDelayed](https://github.com/user-attachments/assets/bbe48da4-ecde-4640-802d-d21497a6ccda)

## 📚 API Endpoints

### User Authentication
- **POST** `/signup`: Register a new user
- **POST** `/login`: Login an existing user
- **POST** `/forgot-password`: Initiate password reset
- **POST** `/reset-password/:token`: Reset password

### Orders
- **POST** `/send-email`: Place an order and notify the admin
- **GET** `/order-status`: Fetch the status of user's orders
- **GET** `/order-response/:orderId/:response`: Update order status based on admin's response

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:
- **Bug Reports & Feature Requests**: Open an issue on GitHub
- **Code Contributions**: Fork the repository and submit a pull request

## 📬 Contact

For any inquiries or support, feel free to reach out to us at `Siddharthas222@gmail.com`.

---

Let's make your office beverage experience effortless and delightful! Cheers! ☕️🍵💧
