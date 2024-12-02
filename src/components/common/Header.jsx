import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavButtons = ({ isMobile = false }) => (
    <>
      {user ? (
        <>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/announcements"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
            
          >
            <Button 
              className={`!bg-[#C84E31] h-8 px-4 text-white hover:!bg-[#C84E31]/90 border-none ${isMobile ? 'w-full' : ''}`}
            >
              {t('common.announcements')}
            </Button>
          </Link>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/chat"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
          >
            <Button 
              className={`!bg-[#C84E31] h-8 ${isMobile ? 'w-full px-4' : 'px-12'} text-white hover:!bg-[#C84E31]/90 border-none`}
              
            >
              {t('common.chat')}
            </Button>
          </Link>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/group-chat"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
          >
            <Button 
              className={`!bg-[#C84E31] h-8 text-white hover:!bg-[#C84E31]/90 border-none ${isMobile ? 'w-full' : ''}`}
            >
              {t('common.discussionRooms')}
            </Button>
          </Link>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/profile"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
          >
            <Button 
              className={`bg-white hover:bg-gray-50 ${isMobile ? 'w-full' : 'px-12'} h-8`}
            >
              {t('common.profile')}
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/login"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
          >
            <Button 
              className={`bg-white text-black hover:bg-gray-50 ${isMobile ? 'w-full' : 'px-12'} h-8`}
            >
              {t('common.login')}
            </Button>
          </Link>
          <Link 
            className={`${isMobile ? 'w-full block' : ''}`} 
            to="/register"
            onClick={()=>{
              setMobileMenuOpe(false)
            }}
          >
            <Button 
              className={`!bg-[#C84E31] h-8 ${isMobile ? 'w-full' : 'px-12'} text-white hover:!bg-[#C84E31]/90 border-none`}
            >
              {'Inscription'}
            </Button>
          </Link>
        </>
      )}
    </>
  );

  const MobileMenu = () => (
    <div className="flex flex-col gap-4 p-4">
      <NavButtons isMobile={true} />
    </div>
  );

  return (
    <header className="bg-black h-28">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Caveat' }}>
            <span className="text-white">Tchat</span>
            <span className="text-[#C84E31]">Rencontre</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavButtons />
        </div>

        <Button
          className="md:hidden text-primary"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(true)}
        />

        <Drawer
          title=""
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          bodyStyle={{ padding: 0 }}
        >
          <MobileMenu />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;