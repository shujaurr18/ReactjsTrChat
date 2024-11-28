import React from 'react';
import { Input, Avatar, Badge, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';

const GroupChat = () => {
  const { t } = useTranslation();

  const ChatUserItem = ({ user, location, online, unreadCount }) => (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 cursor-pointer">
      <div className="relative">
        <Avatar src="/api/placeholder/40/40" className="w-10 h-10" />
        {online && (
          <span className="absolute -bottom-0.5 -right-0.5 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
        )}
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium">{user}</p>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
      {unreadCount > 0 && (
        <Badge 
          count={unreadCount} 
          style={{ 
            backgroundColor: '#C84E31',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px'
          }} 
        />
      )}
    </div>
  );
  const GroupChatTitle = ({ title, selected }) => (
    <div className={`p-3 rounded-lg mb-2 cursor-pointer ${selected ? 'bg-gray-300 border border-[#C84E31] text-[#C84E31]' : 'bg-white'}`}>
      <p className="text-sm">{title}</p>
    </div>
  );

  return (
    <div className="p-2 md:p-4 py-10 md:py-20 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-8">
      <div className="w-full md:w-auto">
      <div className="flex items-center mt-16 gap-2 md:gap-4 bg-white p-2 md:p-3 rounded-xl pr-4 md:pr-14">
      <div className="w-32 h-16 relative top-[-60px]">
              <img
                src={bgImage}
                alt="Profile"
                className="rounded-2xl h-32 w-32 object-cover"
              />
            </div>
            <div>
              <p className="text-primary">Premium</p>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">joseph28</h2>
              </div>
              <p className="text-gray-500">Bordeaux</p>
            </div>
          </div>
          <br />
          <div className="space-y-2 md:space-y-4 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
            <GroupChatTitle title="Group chat title" selected={true} />
            <GroupChatTitle title="Group chat title" />
            <GroupChatTitle title="Group chat title" />
            <GroupChatTitle title="Group chat title" />
            <GroupChatTitle title="Group chat title" />
          </div>
        </div>

        <div className="bg-white rounded-2xl w-full mx-auto  md:h-screen flex flex-col md:flex-row p-2 md:p-4">
          <div className="w-80 border-r bg-white flex flex-col">
            <div className="flex border-b">
              <button className="flex-1 py-2 px-4 font-medium text-[#C84E31] border-b-2 border-[#C84E31]">
                {t('chat.all')}
              </button>
              <button className="flex-1 py-2 px-4 font-medium text-gray-500">
                {t('chat.online')}
              </button>
            </div>

            <div className="flex-grow overflow-y-auto">
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

          <div className="flex-grow flex flex-col bg-gray-50">
            <div className="p-4 bg-white border-b">
              <div className="flex items-center gap-3">
                <Avatar src="/api/placeholder/40/40" />
                <div>
                  <h3 className="font-medium">Marine22</h3>
                  <p className="text-sm text-gray-500">En ligne</p>
                </div>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-4">
              <div className="flex justify-end mb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1 text-right">4 mai 15:56</span>
                  <div className="bg-[#C84E31] text-white rounded-full p-3 max-w-sm">
                    <p>Salut, Salut !</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start mb-4">
                <div>
                  <span className="text-xs text-gray-400 block mb-1">15:56</span>
                  <div className="bg-gray-200 rounded-full p-3 max-w-sm">
                    <p>Coucou Marine !</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <Input.TextArea 
                  placeholder={t('chat.messageInput')}
                  autoSize={{ minRows: 1, maxRows: 4 }}
                  className="rounded-full"
                />
                <Button type="primary" className="bg-[#C84E31] rounded-full px-9">
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

export default GroupChat;