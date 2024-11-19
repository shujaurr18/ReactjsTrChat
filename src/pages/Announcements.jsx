import { Input, Card, Badge, Form, Radio } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';

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
          <span className="bg-white/90 text-[#C84E31] text-sm px-2 py-0.5 rounded font-medium">
            Premium
          </span>
        </div>

        {/* Center Icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
          {/* Message Icon */}
          <div className="w-12 h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          
          {/* Heart Icon */}
          <div className="w-12 h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#ff0000" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Username Container */}
      <div className="bg-white/50 p-3 absolute bottom-3 right-0 left-0">
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
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl pr-14">
          <div className="w-16 h-16">
            <img
              src={bgImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
              <p className='text-primary'>Premium</p>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">joseph28</h2>
              {/* <Badge count="" style={{ backgroundColor: '#C84E31' }} /> */}


            </div>
            <p className="text-gray-500">Bordeaux</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-grow">
          <Form form={form} className="space-y-4">
            <div className="flex items-center gap-4">
              <Input.Search
                placeholder={t('common.search')}
                className="max-w-xl"
                suffix={
                  <button className="text-gray-400 hover:text-gray-600">
                    {t('common.filters')} ●
                  </button>
                }
              />
            </div>
            <Radio.Group className="flex gap-4">
              <Radio value="homme">{t('common.male')}</Radio>
              <Radio value="femme">{t('common.female')}</Radio>
              <Radio value="enLigne">{t('common.online')}</Radio>
            </Radio.Group>
          </Form>
        </div>
      </div>
<div className="max-w-4xl mx-auto">

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