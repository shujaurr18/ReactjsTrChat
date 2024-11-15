import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import bgimage from '@/assets/bgimage.png'
const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center  px-4"
    style={{ 
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>
      <Card className="w-full max-w-md bg-[#C84E31]">
        <h2 className="text-2xl font-bold text-center text-white mb-8">{t('common.login')}</h2>
        <Form layout="vertical">
          <Form.Item label={null} name="email">
            <Input className='rounded-3xl' size="large" placeholder='Email' />
          </Form.Item>
          <Form.Item label={null} name="password">
            <Input.Password size="large" className='rounded-3xl' placeholder='Mot de passe'/>
          </Form.Item>
          <div className="text-right mb-4">
            <Link to="/forgot-password" className="text-white">
              {t('common.forgotPassword')}
            </Link>
          </div>
          <div className="text-center text-white">

            Don't have an account? <Link to="/register" className='underline'>Signup</Link>
          </div>
        </Form>
      </Card>
      <br/>
      <div className="text-center">
<Link to="/">
          <Button
        
          type="primary" size="large" className='inline-flex  rounded-full'>
            {t('common.connect')}
          </Button>
</Link>
      </div>
      </div>
    </div>
  );
};

export default Login