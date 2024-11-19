import { Input, Card, Badge, Form, Radio } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';

const Announcements = () => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();

  const AnnounceCard = () => (
    <Card 
      bordered={false}
      bodyStyle={{ padding: 0 }}
      className="relative cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <Badge.Ribbon text="Premium" color="#C84E31" className="z-10" />
        <img
          src={bgImage}
          alt="Profile"
          className="w-full aspect-square object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <button className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
            <span className="text-2xl">💬</span>
          </button>
          <button className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
            <span className="text-2xl">❤️</span>
          </button>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <span className="text-[#4CAF50] text-lg">●</span>
        <span className="text-[#1F1F1F] text-sm">matthew23</span>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <img
              src={bgImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">joseph28</h2>
              <Badge count="Premium" style={{ backgroundColor: '#C84E31' }} />
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