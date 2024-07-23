
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  confirmationToken: { type: String, default: '' },
  resetPasswordToken: { type: String, default: '' },
  resetPasswordExpires: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other service
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Password validation function
const isValidPassword = (password) => {
  const minLength = 8;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (password.length < minLength) {
    return false;
  }

  if (!specialCharPattern.test(password)) {
    return false;
  }

  return true;
};

// Signup route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email.endsWith('@fosteringlinux.com')) {
    return res.status(400).json({ message: 'Invalid email domain' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one special character' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const confirmationToken = crypto.randomBytes(20).toString('hex');
    const newUser = new User({ email, password: hashedPassword, confirmationToken });

    await newUser.save();

    const confirmationUrl = `http://localhost:${PORT}/confirm/${confirmationToken}`;

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Confirm your email',
      text: `Please confirm your email by clicking the following link: ${confirmationUrl}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending confirmation email', error });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'User created successfully. Please check your email to confirm your account.' });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Email confirmation route
app.get('/confirm/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ confirmationToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid confirmation token' });
    }

    user.confirmed = true;
    user.confirmationToken = '';
    await user.save();

    res.status(200).json({ message: 'Email confirmed successfully. You can now log in to order your favourite beverage hassle free.' });
  } catch (error) {
    res.status(500).json({ message: 'Error confirming email', error });
  }
});


// Forgot Password route
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
    await user.save();

    const resetUrl = `http://localhost:3000/reset-password/${resetPasswordToken}`;

    // Send reset email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset Request',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${resetUrl}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending reset email', error });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Password reset link sent to your email.' });
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Error processing password reset request', error });
  }
});

// Reset Password route
app.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!isValidPassword(password)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one special character' });
  }

  try {
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires:{$gt: Date.now()} });
    if (!user) {
      return res.status(400).json({ message: 'Invalid reset token or expired token' });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = '';
    user.resetPasswordExpires = Date.now();
    
    await user.save();

    res.status(200).json({ message: 'Password reset successfully. You can now log in with your new password.' });
  } catch (error) {
    console.log('Error resetting password:', error);
    res.status(500).json({ message: 'Error resetting password', error });
  }
});


// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', { email, password });

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.confirmed) {
      console.log('User email not confirmed');
      return res.status(400).json({ message: 'Email not confirmed. Please check your email to confirm your account.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Invalid credentials');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Token generated:', token);
    res.status(200).json({ token });
  } catch (error) {
    console.log('Error during login:', error);
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// Protected route example
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    const user = await User.findById(decoded.userId);
    res.status(200).json({ message: 'Protected data', email: user.email });
  });
});

// Email sending route
app.post('/send-email', async (req, res) => {
  const { userEmail, title, desc } = req.body;

  // Save order to database
  const newOrder = new Order({ userEmail, title, desc });
  await newOrder.save();

  const responseUrlBase = `http://localhost:${PORT}/order-response/${newOrder._id}`;

  const mailOptions = {
    from: userEmail,
    to: 'siddharthas222@gmail.com',
    subject: `New Order received: ${title}`,
    text: `Order Details:\n\nTitle: ${title}\nDescription: ${desc}\n\nOrdered by: ${userEmail}\n\n
    Respond with one of the following options:\n
    - [Delivered shortly](${responseUrlBase}/delivered)\n
    - [Sorry, I am busy](${responseUrlBase}/busy)\n
    - [I am on leave](${responseUrlBase}/leave)\n
    - [Order will be delayed](${responseUrlBase}/delayed)`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Sit back and relax, Your order is sent and it will be delivered shortly' });
    }
  });
});

// Handle response route
app.get('/order-response/:orderId/:response', async (req, res) => {
  const { orderId, response } = req.params;
  const validResponses = {
    delivered: 'The order will be delivered shortly',
    busy: 'Sorry, I am busy',
    leave: 'I am on leave',
    delayed: 'The order will be delayed'
  };

  const status = validResponses[response];
  if (!status) {
    return res.status(400).json({ message: 'Invalid response' });
  }

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.log('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status', error });
  }
});



//fetching order status
app.get('/order-status', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });

    try {
      const user = await User.findById(decoded.userId);
      const orders = await Order.find({ userEmail: user.email }); // Assuming you have an Order model
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching order status', error });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

