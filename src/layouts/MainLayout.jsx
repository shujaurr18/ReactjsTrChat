// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <Layout className="min-h-screen">
      {/* {!isAuthPage && <Header />} */}
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;