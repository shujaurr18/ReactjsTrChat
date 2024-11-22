import { Input, Card, Badge, Form, Radio, Checkbox } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';
import { HeartFilled, MessageFilled, SearchOutlined } from '@ant-design/icons';

const Announcements = () => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const AnnounceCard = () => (
    <div  className="relative h-72 rounded-lg overflow-hidden bg-gray-100">
      {/* Main Image Container */}
      <div className="relative aspect-[3/4]">
        <img
          src={bgImage}
          alt="User"
          className="w-full h-full object-cover"
        />
        
        {/* Premium Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-primary text-sm px-2 py-0.5 rounded font-medium">
            Premium
          </span>
        </div>

        {/* Center Icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
          {/* Message Icon */}
          <div className="w-12 h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
          
          <MessageFilled className='text-white'/>
          </div>
          
          {/* Heart Icon */}
          <div className="w-12 h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
        
          <HeartFilled className='text-primary'/>
        
          </div>
        </div>
      </div>

      {/* Username Container */}
      <div className="bg-white/50 p-3 absolute bottom-0 right-0 left-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm text-gray-700">mathieu23</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Profile Section */}
        <div className="flex items-center mt-16 gap-4 bg-white p-3 rounded-xl pr-14">
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

        {/* Search Section */}
        <div className="flex-grow ml-32">
          <Form form={form} className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                placeholder={t('common.search')}
                className="max-w-xl"
                prefix={<SearchOutlined/>}
                suffix={
                    <button className="text-gray-400 hover:text-gray-600 border-0 bg-transparent">
                      Filters ●
                    </button>
                  }

              />
            </div>
            <Checkbox.Group defaultValue={'femme'} className="flex gap-4">
              <Checkbox value="homme">{t('common.male')}</Checkbox>
              <Checkbox defaultChecked value="femme">{t('common.female')}</Checkbox>
              <Checkbox value="enLigne">{t('common.online')}</Checkbox>
            </Checkbox.Group>
          </Form>
        </div>
      </div>
<div className="max-w-5xl mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
            <AnnounceCard key={index} />
        ))}
      </div>
        </div>
    </div>
  );
};

export default Announcements;