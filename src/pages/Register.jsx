// src/pages/Register.js
import React, { useState } from 'react';
import { Form, Input, Button, Select, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
// import { registerUser } from '../utils/firebase';
import { useAuth } from '../context/AuthContext';
import bgimage from '@/assets/bgimage.png';
import { registerUser } from '../services/firebase';

const Register = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { showNotification } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password, ...userData } = values;
      const result = await registerUser(email, password, userData);
      if (result.success) {
        showNotification('success', 'Succès', 'Inscription réussie !');
        navigate('/');
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
      style={{ 
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="min-h-screen bg-[#1F1F1F] bg-opacity-50 flex items-center justify-center"
    >
      <div className="w-full max-w-md p-6">
        <Form 
          form={form} 
          layout="vertical" 
          onFinish={onFinish}
        >
          <div className="bg-[#C84E31] rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              {t('common.register')}
            </h2>
            
            <Form.Item 
              name="pseudo"
              rules={[{ required: true, message: 'Veuillez saisir votre pseudo !' }]}
            >
              <Input 
                placeholder="Pseudo"
                className="!rounded-md !border-none"
              />
            </Form.Item>

            <Form.Item 
              name="email"
              rules={[
                { required: true, message: 'Veuillez saisir votre email !' },
                { type: 'email', message: 'Veuillez saisir un email valide !' }
              ]}
            >
              <Input 
                placeholder="Email"
                className="!rounded-md !border-none"
              />
            </Form.Item>

            <Form.Item 
              name="password"
              rules={[
                { required: true, message: 'Veuillez saisir votre mot de passe !' },
                { min: 6, message: 'Le mot de passe doit comporter au moins 6 caractères !' }
              ]}
            >
              <Input.Password 
                placeholder="Mot de passe"
                className="!rounded-md !border-none"
              />
            </Form.Item>

            <Form.Item 
              name="phone"
              rules={[{ required: true, message: 'Veuillez saisir votre numéro de téléphone !' }]}
            >
              <Input 
                placeholder="Téléphone"
                className="!rounded-md !border-none"
              />
            </Form.Item>

            <Form.Item 
              name="gender"
              rules={[{ required: true, message: 'Veuillez sélectionner votre genre !' }]}
            >
              <Select
                placeholder="Genre"
                className="!rounded-md"
                dropdownStyle={{ borderRadius: '8px' }}
              >
                <Select.Option value="male">{t('common.male')}</Select.Option>
                <Select.Option value="female">{t('common.female')}</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item 
              name="city"
              rules={[{ required: true, message: 'Veuillez saisir votre ville !' }]}
            >
              <Input 
                placeholder="Ville"
                className="!rounded-md !border-none"
              />
            </Form.Item>

            <div className="text-center text-white">
              Vous avez déjà un compte ? <Link to="/login" className='underline'>Connexion</Link>
            </div>
          </div>
          <br />
          <Form.Item>
            <Button 
              type="primary"
              htmlType="submit"
              className="!bg-[#C84E31] px-5 w-full !text-white !border-2 !rounded-full hover:!bg-[#C84E31]/90"
              loading={loading}
            >
              {t('common.register')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
