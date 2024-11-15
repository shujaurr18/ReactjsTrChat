import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          <span className="text-white">Tchat</span>
          <span className="text-primary">Rencontre</span>
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2">

      <p className="text-gray-400 mt-2">{t('footer.description')}</p>
        </div>
<div className=""></div>
        <div>
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

        <div>
          <h3 className="text-white mb-4">{t('footer.menu')}</h3>
          <ul className="space-y-2">
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
export default Footer