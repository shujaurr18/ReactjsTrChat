import React from 'react';
import { Card, Button, Form, Input, Select, Tabs, Badge } from 'antd';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const PricingCard = ({ type, price, features, buttonText }) => (
    <Card className="text-center h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">{type}</h3>
      <div className="text-2xl font-bold text-primary mb-6">{price}</div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            <span className="text-green-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button type={type === 'Premium' ? 'primary' : 'default'} block>
        {buttonText}
      </Button>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src="/api/placeholder/128/128"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <Badge.Ribbon text="Premium" color="#C84E31">
                <h2 className="text-xl font-bold">joseph28</h2>
              </Badge.Ribbon>
              <p className="text-gray-500">Bordeaux</p>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs
            items={[
              {
                key: '1',
                label: t('profile.info'),
                children: (
                  <Form form={form} layout="vertical" initialValues={{
                    pseudo: 'joseph28',
                    city: 'Bordeaux'
                  }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Form.Item name="pseudo" label={t('common.pseudo')}>
                        <Input size="large" />
                      </Form.Item>
                      <Form.Item name="email" label={t('common.email')}>
                        <Input size="large" />
                      </Form.Item>
                      <Form.Item name="phone" label={t('common.phone')}>
                        <Input size="large" />
                      </Form.Item>
                      <Form.Item name="city" label={t('common.city')}>
                        <Input size="large" />
                      </Form.Item>
                      <Form.Item name="gender" label={t('common.gender')}>
                        <Select size="large">
                          <Select.Option value="male">{t('common.male')}</Select.Option>
                          <Select.Option value="female">{t('common.female')}</Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                    <Form.Item name="description" label={t('common.description')}>
                      <Input.TextArea rows={4} />
                    </Form.Item>
                    <Button type="primary">{t('common.save')}</Button>
                  </Form>
                )
              },
              {
                key: '2',
                label: t('profile.pricing.title'),
                children: (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PricingCard
                      type={t('profile.free')}
                      price={t('profile.pricing.free.price')}
                      features={t('profile.pricing.free.features', { returnObjects: true })}
                      buttonText={t('common.current')}
                    />
                    <PricingCard
                      type={t('profile.premium')}
                      price={t('profile.pricing.premium.price')}
                      features={t('profile.pricing.premium.features', { returnObjects: true })}
                      buttonText={t('profile.pricing.premium.button')}
                    />
                  </div>
                )
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;