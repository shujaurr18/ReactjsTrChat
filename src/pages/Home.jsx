// src/pages/Home.jsx
import React from 'react';
import { Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';
import bgImagecontact from '@/assets/bgImagecontact.png';
import { HeartFilled, MessageFilled } from '@ant-design/icons';
// import { Heart } from 'lucide-react';


const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-black/50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlend: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <h1 className="text-5xl  text-white mb-8">
              {t('home.title')}
            </h1>
            <br/>
            <div className="text-xl text-white/80 mb-12 max-w-xl">
              <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
              {t('home.subtitle')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-96 justify-between ">
              <Card className="bg-[#C1C1C1] backdrop-blur rounded-3xl">
                <h3 className="text-white mb-4">
                  <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
                  {t('home.cardDescription')}
                </h3>
                <Button className="!bg-primary rounded-3xl px-10 text-white border-none">
                  {t('home.startChat')}
                </Button>
              </Card>

              <Card className="bg-[#C1C1C1] backdrop-blur rounded-3xl">
                <h3 className="text-white mb-4">
                  <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
                  {t('home.cardDescription')}
                </h3>
                <Button className="rounded-3xl px-10 !bg-primary text-white border-none">
                  {t('home.startMeeting')}
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Active Rooms & Users Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <div className="grid grid-cols-2 gap-8">
  {/* Left Column */}
            
  <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('home.activeRooms')}</h2>

    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-center gap-4 p-4 rounded-lg border">
        {/* <div className="w-12 h-12 rounded-full bg-gray-200" /> */}
        <img
          src={bgImage}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3>{t('home.adultRoom')}</h3>
          <p className="text-sm text-gray-500">10 {t('home.connectedUsers')}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">6</span>
        </div>
      </div>
    ))}
  </div>

  {/* Right Column */}
  <div className="space-y-4">
  <h2 className="text-2xl font-bold mb-6 text-center">{t('home.connectedUsers')}</h2>

    {[...Array(5)].map((_, i) => (
      <div key={i} className="flex items-center gap-4 p-4 rounded-lg border">
 <img
          src={bgImage}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />        <div>
          <h3>{t('home.adultRoom')}</h3>
          <p className="text-sm text-gray-500">10 {t('home.connectedUsers')}</p>
        </div>
        <div className="ml-auto">
          <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">6</span>
        </div>
      </div>
    ))}
  </div>
</div>
<div className="text-center">

<Button className=" !bg-primary px-10 rounded-3xl text-white border-none mt-4">
  {t('home.seeMore')}
</Button>
</div>
          </div>

          <div>
          <div className="grid grid-cols-2 gap-4">
  {[...Array(4)].map((_, i) => (
    <div key={i} className="relative h-72 rounded-lg overflow-hidden bg-gray-100">
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
        
        <MessageFilled className='text-white'/>
          </div>
          
          {/* Heart Icon */}
          <div className="w-12 h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
         
         <HeartFilled className='text-primary'/>
          </div>
        </div>
      </div>

      {/* Username Container */}
      <div className="bg-white/50 p-3 absolute bottom-0 right-0 left-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm text-gray-700">mathieu23</span>
        </div>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>

 
 {/* Footer Banner Section */}
<div className="relative h-[700px]">
  {/* Background Image */}
  <img 
    src={bgImagecontact}
    alt="Bridge"
    className="w-full h-full object-cover grayscale"
  />
  
  <div className="absolute inset-0">
    {/* Top Card */}
    <div className="absolute top-12 left-12 max-w-lg bg-[#C1C1C1] backdrop-blur-sm rounded-2xl p-6">
      <div className="space-y-4">
        <h2 className="text-xl">
          <span className="text-black font-medium">Tchat</span>
          <span className="text-[#C84E31] font-medium">Rencontre</span>
          <span className="text-black"> vous permet d'accéder aux annonces des personnes près de chez vous, au chat ainsi qu'aux salons de</span>
        </h2>
        <Button className="!bg-[#C84E31] text-white border-none rounded-full  h-12">
          Sign up
        </Button>
      </div>
    </div>

    {/* Testimonial Cards */}
    <div className="absolute bottom-12 left-0 right-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-6 justify-center">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-black/80 backdrop-blur text-white rounded-2xl p-6 w-[400px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={bgImagecontact}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#C84E31] font-medium">Florine R</h4>
                  <p className="text-sm text-gray-300">Femme, 28 ans, Bordeaux</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
              </p>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${
                i === 0 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};





export default Home

