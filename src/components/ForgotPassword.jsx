import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import bgimage from '@/assets/bgimage.png';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, values.email);
      showNotification('success', 'Succès', 'Lien de réinitialisation envoyé à votre email');
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
              Mot de passe oublié
            </h2>
            <Form.Item 
              name="email"
              rules={[
                { required: true, message: 'Veuillez saisir votre email!' },
                { type: 'email', message: 'Veuillez saisir un email valide!' }
              ]}
            >
              <Input 
                className='rounded-3xl' 
                size="large" 
                placeholder='Email' 
              />
            </Form.Item>
          
          
          </Card>
          <br />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className='w-full rounded-full'
            loading={loading}
          >
            Envoyer le lien
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;