import React, { useState } from 'react';
import { Input, Avatar, Badge, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Chat = () => {
  const { t } = useTranslation();
  const [showUserList, setShowUserList] = useState(true);

  const ChatUserItem = ({ user, location, online, unreadCount }) => (
    <div className="flex items-center gap-2 md:gap-3 p-2 hover:bg-gray-50 cursor-pointer">
      <div className="relative">
        <Avatar src="/api/placeholder/40/40" className="w-8 h-8 md:w-10 md:h-10" />
        {online && (
          <span className="absolute -bottom-0.5 -right-0.5 block h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500 ring-2 ring-white" />
        )}
      </div>
      <div className="flex-grow">
        <p className="text-xs md:text-sm font-medium">{user}</p>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
      {unreadCount > 0 && (
        <Badge 
          count={unreadCount} 
          style={{ 
            backgroundColor: '#C84E31',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            '@media (min-width: 768px)': {
              width: '20px',
              height: '20px',
              fontSize: '12px'
            }
          }} 
        />
      )}
    </div>
  );

  return (
    <div className="p-2 md:p-4 py-10 md:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-8">
        {/* Profile Section */}
        <div className="w-full md:w-auto">
          <div className="flex items-center mt-16 gap-2 md:gap-4 bg-white p-2 md:p-3 rounded-xl pr-4 md:pr-14">
            <div className="w-24 md:w-32 h-12 md:h-16 relative top-[-40px] md:top-[-60px]">
              <img
                src={bgImage}
                alt="Profile"
                className="rounded-2xl h-24 md:h-32 w-24 md:w-32 object-cover"
              />
            </div>
            <div>
              <p className="text-primary text-sm md:text-base">Premium</p>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-xl font-semibold">joseph28</h2>
              </div>
              <p className="text-sm md:text-base text-gray-500">Bordeaux</p>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="bg-white rounded-2xl w-full mx-auto h-[calc(100vh-200px)] md:h-screen flex flex-col md:flex-row p-2 md:p-4">
          {/* User List */}
          <div className={`w-full md:w-80 border-r bg-white flex flex-col ${!showUserList && 'hidden md:flex'}`}>
            <div className="flex border-b">
              <button className="flex-1 py-2 px-4 text-sm md:text-base font-medium text-[#C84E31] border-b-2 border-[#C84E31]">
                {t('chat.all')}
              </button>
              <button className="flex-1 py-2 px-4 text-sm md:text-base font-medium text-gray-500">
                {t('chat.online')}
              </button>
            </div>

            <div className="flex-grow overflow-y-auto">
              {/* User list items */}
              {[
                { user: 'Marine22', location: 'Salut, salut !', unreadCount: 2 },
                { user: 'Amandine32', location: 'Salut !', unreadCount: 1 },
                { user: 'Sophie22', location: 'Colmar', unreadCount: 0 },
                { user: 'Florine24', location: 'Belfort !', unreadCount: 1 },
                { user: 'Barbara29', location: 'Alfort !', unreadCount: 3 }
              ].map((chat) => (
                <ChatUserItem 
                  key={chat.user}
                  user={chat.user}
                  location={chat.location}
                  online={true}
                  unreadCount={chat.unreadCount}
                />
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className={`flex-grow flex flex-col bg-gray-50 ${showUserList && 'hidden md:flex'}`}>
            <div className="p-2 md:p-4 bg-white border-b flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar src="/api/placeholder/40/40" className="w-8 h-8 md:w-10 md:h-10" />
                <div>
                  <h3 className="text-sm md:text-base font-medium">Marine22</h3>
                  <p className="text-xs md:text-sm text-gray-500">En ligne</p>
                </div>
              </div>
              <Button 
                className="md:hidden" 
                onClick={() => setShowUserList(true)}
                icon={<ArrowLeftOutlined />}
              />
            </div>

            <div className="flex-grow overflow-y-auto p-2 md:p-4">
              {/* Messages */}
              <div className="space-y-4">
                {/* Sent message */}
                <div className="flex justify-end mb-4">
                  <div className="message-content">
                    <span className="text-xs text-gray-400 block mb-1 text-right">4 mai 15:56</span>
                    <div className="bg-[#C84E31] text-white rounded-full p-2 md:p-3">
                      <p className="text-sm md:text-base">Salut, Salut !</p>
                    </div>
                  </div>
                </div>
                {/* Received message */}
                <div className="flex justify-start mb-4">
                  <div className="message-content">
                    <span className="text-xs text-gray-400 block mb-1">15:56</span>
                    <div className="bg-gray-200 rounded-full p-2 md:p-3">
                      <p className="text-sm md:text-base">Coucou Marine !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-2 md:p-4 bg-white border-t">
              <div className="flex gap-2">
                <Input.TextArea 
                  placeholder={t('chat.messageInput')}
                  autoSize={{ minRows: 1, maxRows: 4 }}
                  className="rounded-full text-sm md:text-base"
                />
                <Button type="primary" className="bg-[#C84E31] rounded-full px-4 md:px-9 text-sm md:text-base">
                  {t('chat.send')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;