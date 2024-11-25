// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import theme from './theme/theme.config.js';
import Profile from './pages/Profile.jsx';
import Announcements from './pages/Announcements.jsx';
import Chat from './pages/Chat.jsx';
import GroupChat from './pages/GroupChat.jsx';
import ProtectedRoute, { PublicRoute } from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext.jsx';
import WarningModal from './Modals/WarningModal.jsx';
import { MyAnnouncements, PublishAnnouncement } from './pages/PublishAnnouncement.jsx';
import AddDetails from './pages/AddDetails.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
// import { AuthProvider } from './context/AuthContext.js';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
        <WarningModal/>
          <Routes>
              <Route 
                path="login" 
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } 
              />
              <Route 
  path="forgot-password" 
  element={
    <PublicRoute>
      <ForgotPassword />
    </PublicRoute>
  } 
/>
    
              <Route 
                path="register" 
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                } 
              />
            <Route path="/" element={<MainLayout />}>
              {/* Public Routes */}

              {/* Protected Routes */}
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } 
              />
                        <Route 
  path="publish" 
  element={
    <ProtectedRoute>
      <PublishAnnouncement />
    </ProtectedRoute>
  } 
/>
<Route 
  path="my-adds" 
  element={
    <ProtectedRoute>
      <MyAnnouncements />
    </ProtectedRoute>
  } 
/>
<Route 
  path="my-adds/:id" 
  element={
    <ProtectedRoute>
      <AddDetails />
    </ProtectedRoute>
  } 
/>
              <Route 
                path="profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="announcements" 
                element={
                  <ProtectedRoute>
                    <Announcements />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="chat" 
                element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="group-chat" 
                element={
                  <ProtectedRoute>
                    <GroupChat />
                  </ProtectedRoute>
                } 
              />

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;