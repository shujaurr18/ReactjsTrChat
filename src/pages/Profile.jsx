import { Button, Card, Form, Input, Select } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';

const Profile = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const PricingCard = ({ type, price, features }) => (
    <Card className="bg-[#B4573B] text-white p-6 rounded-lg">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{type}</h3>
        <p className="text-lg mb-4">{price}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-center">{feature}</li>
          ))}
        </ul>
        {type === t('profile.premium') && (
          <Button className="w-full bg-[#B4573B] border text-white border-white hover:bg-[#8B4431]">
            {t('profile.pricing.premium.button')}
          </Button>
        )}
      </div>
    </Card>
  );

  return (
    <>
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <div className=" rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
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
          <br />
          <Button type="primary" className="bg-[#B4573B] w-full hover:bg-[#8B4431] rounded-full px-10" htmlType="submit">
                  Publish an ad
                </Button>
                <Button type="primary" className="mt-4 w-full bg-[#B4573B] hover:bg-[#8B4431] rounded-full px-10" htmlType="submit">
                  See my ads
                </Button>
          </div>

          <div className="w-full md:w-3/4">
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                pseudo: 'joseph28',
                city: 'Bordeaux'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Form.Item
                    label={t('common.pseudo')}
                    name="pseudo"
                  >
                    <Input className='rounded-full'/>
                  </Form.Item>
                  <Form.Item
                    label={t('common.email')}
                    name="email"
                  >
                    <Input type="email" className='rounded-full'/>
                  </Form.Item>
                  <Form.Item
                    label={t('common.password')}
                    name="password"
                  >
                    <Input.Password className='rounded-full'/>
                  </Form.Item>
                  <Form.Item
                    label={t('common.phone')}
                    name="phone"
                  >
                    <Input type="tel" className='rounded-full'/>
                  </Form.Item>
                  <Form.Item
                    label={t('common.gender')}
                    name="gender"
                  >
                    <Select
                    
                    className='rounded-full'
                    >
                      <Select.Option value="">{t('common.select')}</Select.Option>
                      <Select.Option value="male">{t('common.male')}</Select.Option>
                      <Select.Option value="female">{t('common.female')}</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label={t('common.city')}
                    name="city"
                  >
                    <Input 
                    className='rounded-full'
                    />
                  </Form.Item>
                </div>
                <div>
                  <div className="space-y-4">
                    <Form.Item
                      label={t('common.description')}
                      name="description"
                    >
                      <Input.TextArea className='rounded-3xl' rows={4} />
                    </Form.Item>
                    <Form.Item
                      label={t('common.profilePhoto')}
                    >
                      <div className="border  p-4 text-center rounded-3xl">
                        <img
                          src={bgImage}
                          alt={t('common.profilePhoto')}
                          className="w-24 h-24 mx-auto mb-2 rounded-2xl"
                        />
                        <Button variant="outline" className="w-full rounded-full">
                          <span>⬇</span> {t('common.upload')}
                        </Button>
                      </div>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button type="primary" className="bg-[#B4573B] hover:bg-[#8B4431] rounded-full px-10" htmlType="submit">
                  {t('common.save')}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
<div className="bg-white">

      <div className="max-w-7xl mx-auto p-4 space-y-8 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <PricingCard
          type={t('profile.free')}
          price={t('profile.pricing.free.price')}
          features={t('profile.pricing.free.features', { returnObjects: true })}
        />
        <PricingCard
          type={t('profile.premium')}
          price={t('profile.pricing.premium.price')}
          features={t('profile.pricing.premium.features', { returnObjects: true })}
        />
      </div>
    </div>
</div>

    </>

  );
};

export default Profile;