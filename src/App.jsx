import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import theme from './theme/theme.config.js';
import Profile from './pages/Profile.jsx';
import Announcements from './pages/Announcements.jsx';
import Chat from './pages/Chat.jsx';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route  path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="chat" element={<Chat />} />


            
            <Route  path="/" element={<Home />} />
            <Route path="*" element={<Login />} /> {/* This catches all unmatched routes */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;