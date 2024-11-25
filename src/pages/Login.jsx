// src/pages/Login.js
import React, { useState } from 'react';
import { Form, Input, Button, Card, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import bgimage from '@/assets/bgimage.png';
import { loginUser } from '../services/firebase';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { showNotification } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await loginUser(values.email, values.password);
      if (result.success) {
        showNotification('success', 'Succès', 'Connexion réussie!');
        navigate(location.state?.from?.pathname || '/');
      } else {
        showNotification('error', 'Erreur', result.error);
      }
    } catch (error) {
      showNotification('error', 'Erreur', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
      style={{ 
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div>
          <Form layout="vertical" onFinish={onFinish}>
        <Card className="w-full max-w-md bg-[#C84E31]">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            {t('common.login')}
          </h2>
            <Form.Item 
              label={null} 
              name="email"
              rules={[
                { required: true, message: 'Veuillez saisir votre email!' },
                { type: 'email', message: 'Veuillez saisir un email valide!' }
              ]}
            >
              <Input className='rounded-3xl' size="large" placeholder='Email' />
            </Form.Item>
            <Form.Item 
              label={null} 
              name="password"
              rules={[
                { required: true, message: 'Veuillez saisir votre mot de passe!' },
                { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères!' }
              ]}
            >
              <Input.Password size="large" className='rounded-3xl' placeholder='Mot de passe'/>
            </Form.Item>
            <div className="text-right mb-4">
              <Link to="/forgot-password" className="text-white">
                {t('common.forgotPassword')}
              </Link>
            </div>
            <div className="text-center text-white mt-4">
              Vous n'avez pas de compte? <Link to="/register" className='underline'>Inscription</Link>
            </div>
        </Card>
        <br />
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className='w-full rounded-full'
              loading={loading}
            >
              {t('common.connect')}
            </Button>
          </Form>
      </div>
    </div>
  );
};

export default Login;
