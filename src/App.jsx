// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import { theme } from './theme/theme.config';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Chat from './pages/Chat';
// import i18n from '.'

// import Announcements from './pages/Announcements';
import theme from './theme/theme.config.js';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route  element={<Navigate to="/login" replace />} />

            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Redirect to="/login" state={{ from: location }} replace /> */}
    
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;