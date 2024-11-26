import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <header className="bg-black h-28">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Caveat' }}>
            <span className="text-white">Tchat</span>
            <span className="text-[#C84E31]">Rencontre</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/announcements">
                <Button
                  className="!bg-[#C84E31] h-8 px-4 text-white hover:!bg-[#C84E31]/90 border-none"
                >
                  {t('common.announcements')}
                </Button>
              </Link>
              <Link to="/chat">
                <Button
                  className="!bg-[#C84E31] h-8 px-12 text-white hover:!bg-[#C84E31]/90 border-none"
                >
                  {t('common.chat')}
                </Button>
              </Link>
              <Link to="/group-chat">
                <Button
                  className="!bg-[#C84E31] h-8 text-white hover:!bg-[#C84E31]/90 border-none"
                >
                  {t('common.discussionRooms')}
                </Button>
              </Link>
              <Link to="/profile">
                <Button className="bg-white hover:bg-gray-50 px-12 h-8">
                  {t('common.profile')}
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  className="bg-white text-black hover:bg-gray-50 px-12 h-8"
                >
                  {t('common.login')}
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  className="!bg-[#C84E31] h-8 px-12 text-white hover:!bg-[#C84E31]/90 border-none"
                >
                  {'Inscription'}
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
