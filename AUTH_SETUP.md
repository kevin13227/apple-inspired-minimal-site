# Authentication Setup Guide

## 🚀 Quick Start

This project now includes a complete authentication system with Apple-inspired design.

## 📁 Files Created

- `src/components/AuthProvider.tsx` - Authentication context and state management
- `src/components/ProtectedRoute.tsx` - Route protection component
- `src/pages/Login.tsx` - Sleek login page with Apple-inspired design
- `src/pages/Dashboard.tsx` - Protected dashboard for authenticated users
- `server.js` - Backend authentication server
- `server-package.json` - Backend dependencies

## 🔧 Setup Instructions

### 1. Create Environment File

Create a `.env` file in the root directory with your admin credentials:

```bash
# .env
ADMIN_EMAIL=your-admin-email@example.com
ADMIN_PASSWORD=your-secure-password
JWT_SECRET=your-super-secret-jwt-key
```

### 2. Install Backend Dependencies

```bash
# Copy the server package.json
cp server-package.json package.json

# Install dependencies
npm install

# Or install manually:
npm install express cors jsonwebtoken dotenv
npm install --save-dev nodemon
```

### 3. Start the Backend Server

```bash
# Start the authentication server
npm run dev

# The server will run on http://localhost:3001
```

### 4. Start the Frontend

In a new terminal:

```bash
npm run dev

# The frontend will run on http://localhost:5173
```

## 🔐 Authentication Flow

1. **Login Page**: Visit `/login` to access the authentication form
2. **Credentials**: Use the email/password from your `.env` file
3. **JWT Token**: Upon successful login, a JWT token is generated and stored
4. **Dashboard Access**: Authenticated users can access `/dashboard`
5. **Session Management**: Users stay logged in until logout or token expiration

## 🎨 Features

- **Apple-Inspired Design**: Clean, minimal interface with smooth animations
- **Form Validation**: Real-time validation with elegant error handling
- **Error Animation**: Subtle shake animation for failed login attempts
- **Responsive Design**: Works perfectly on all device sizes
- **Theme Support**: Integrates with existing light/dark theme system
- **Secure Storage**: JWT tokens stored in localStorage
- **Protected Routes**: Automatic redirection for unauthenticated users

## 🛡️ Security Features

- **Environment Variables**: Credentials stored securely in `.env` file
- **JWT Tokens**: Secure session management with expiration
- **CORS Protection**: Backend configured with proper CORS settings
- **Input Validation**: Frontend and backend validation
- **Protected Endpoints**: API endpoints require valid authentication

## 🔄 API Endpoints

- `POST /api/login` - Authenticate user credentials
- `GET /api/verify` - Verify JWT token validity
- `GET /api/health` - Server health check

## 🎯 Usage

1. **Homepage**: Shows login button for unauthenticated users
2. **Login**: Enter credentials from your `.env` file
3. **Dashboard**: Access protected content after successful authentication
4. **Logout**: Click logout button to end session

## 🚨 Important Notes

- **Never commit `.env` files** to version control
- **Use strong passwords** in production
- **Change JWT_SECRET** for production deployments
- **Backend server must be running** for authentication to work

## 🐛 Troubleshooting

- **Login fails**: Check that backend server is running on port 3001
- **CORS errors**: Ensure backend CORS is properly configured
- **Token issues**: Clear localStorage and try logging in again
- **Port conflicts**: Change PORT in `.env` if 3001 is occupied

## 🌟 Customization

- **Colors**: Modify Tailwind CSS variables in `tailwind.config.ts`
- **Animations**: Adjust shake animation timing in CSS
- **Layout**: Customize login form and dashboard components
- **Validation**: Add additional form validation rules as needed
