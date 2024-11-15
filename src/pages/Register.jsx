import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import bgimage from '@/assets/bgimage.png'
import { Link } from 'react-router-dom';

const Register = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  return (
    <div 
    style={{ 
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    className="min-h-screen bg-[#1F1F1F] bg-opacity-50 flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <Form 
          form={form} 
          layout="vertical" 
          className="bg-[#C84E31] rounded-lg p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            {t('common.register')}
          </h2>
          
          <Form.Item name="pseudo">
            <Input 
              placeholder="Pseudo"
              className="!rounded-md !border-none"
            />
          </Form.Item>

          <Form.Item name="email">
            <Input 
              placeholder="Email"
              className="!rounded-md !border-none"
            />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password 
              placeholder="Mot de passe"
              className="!rounded-md !border-none"
            />
          </Form.Item>

          <Form.Item name="phone">
            <Input 
              placeholder="Téléphone"
              className="!rounded-md !border-none"
            />
          </Form.Item>

          <Form.Item name="gender">
            <Select
              placeholder="Genre"
              className="!rounded-md"
              dropdownStyle={{ borderRadius: '8px' }}
            >
              <Select.Option value="male">{t('common.male')}</Select.Option>
              <Select.Option value="female">{t('common.female')}</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="city">
            <Input 
              placeholder="Ville"
              className="!rounded-md !border-none"
            />
          </Form.Item>

        <div className="text-center text-white">

Already have an  account? <Link to="/login" className='underline'>Login</Link>
</div>
        </Form>
        <br />
        <div className="text-center">
<Link to="/">
          <Button 
            type="primary"
            className="!bg-[#C84E31] px-5   !text-white !border-2  !rounded-full hover:!bg-[#C84E31]/90"
            >
            S'inscrire
          </Button>
</Link>
              </div>
      </div>
    </div>
  );
};

export default Register;