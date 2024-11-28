import { Input, Card, Badge, Form, Radio, Checkbox } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';
import { HeartFilled, MessageFilled, SearchOutlined } from '@ant-design/icons';

const Announcements = () => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const AnnounceCard = () => (
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden bg-gray-100">
      {/* Main Image Container */}
      <div className="relative aspect-[3/4]">
        <img
          src={bgImage}
          alt="User"
          className="w-full h-full object-cover"
        />
        
        {/* Premium Badge */}
        <div className="absolute top-2 md:top-3 right-2 md:right-3">
          <span className="bg-white/90 text-primary text-xs md:text-sm px-2 py-0.5 rounded font-medium">
            Premium
          </span>
        </div>

        {/* Center Icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 md:gap-3">
          {/* Message Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
            <MessageFilled className='text-white text-sm sm:text-base md:text-lg'/>
          </div>
          
          {/* Heart Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
            <HeartFilled className='text-primary text-sm sm:text-base md:text-lg'/>
          </div>
        </div>
      </div>

      {/* Username Container */}
      <div className="bg-white/50 p-2 md:p-3 absolute bottom-0 right-0 left-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs md:text-sm text-gray-700">mathieu23</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center mt-16 gap-4 bg-white p-3 rounded-xl pr-4 md:pr-14 w-full lg:w-auto">
          <div className="w-24 sm:w-32 h-16 relative top-[-40px] sm:top-[-60px]">
            <img
              src={bgImage}
              alt="Profile"
              className="rounded-2xl h-24 sm:h-32 w-24 sm:w-32 object-cover"
            />
          </div>
          <div className="text-center sm:text-left mt-[-20px] sm:mt-0">
            <p className="text-primary text-sm md:text-base">Premium</p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-lg md:text-xl font-semibold">joseph28</h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base">Bordeaux</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex-grow lg:ml-32 mt-4 lg:mt-0">
          <Form form={form} className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                placeholder={t('common.search')}
                className="w-full max-w-xl"
                prefix={<SearchOutlined/>}
                suffix={
                  <button className="text-gray-400 hover:text-gray-600 border-0 bg-transparent text-sm md:text-base">
                    Filters ●
                  </button>
                }
              />
            </div>
            <Checkbox.Group defaultValue={'femme'} className="flex flex-wrap gap-4">
              <Checkbox value="homme">{t('common.male')}</Checkbox>
              <Checkbox defaultChecked value="femme">{t('common.female')}</Checkbox>
              <Checkbox value="enLigne">{t('common.online')}</Checkbox>
            </Checkbox.Group>
          </Form>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {[...Array(8)].map((_, index) => (
            <AnnounceCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;