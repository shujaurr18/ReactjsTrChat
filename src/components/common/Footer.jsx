// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { MenuOutlined } from '@ant-design/icons';



// Footer.jsx
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold" style={{fontFamily:'Caveat'}}>
            <span className="text-white">Tchat</span>
            <span className="text-primary">Rencontre</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <p className="text-gray-400 mt-2">{t('footer.description')}</p>
          </div>
          
          <div className="hidden lg:block"></div>

          <div className="col-span-1">
            <h3 className="text-white mb-4">{t('footer.menu')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chat" className="text-gray-400 hover:text-primary">
                  {t('common.chat')}
                </Link>
              </li>
              <li>
                <Link to="/announcements" className="text-gray-400 hover:text-primary">
                  {t('common.announcements')}
                </Link>
              </li>
              <li>
                <Link to="/discussion" className="text-gray-400 hover:text-primary">
                  {t('common.discussionRooms')}
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-primary">
                  {t('common.register')}
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-primary">
                  {t('common.login')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white mb-4">{t('footer.menu')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-primary">
                  {t('footer.legal')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default  Footer;