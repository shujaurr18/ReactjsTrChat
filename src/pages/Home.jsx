import React, { useState } from 'react';
import { Button, Card, Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import bgImage from '@/assets/bgimage.png';
import bgImagecontact from '@/assets/bgImagecontact.png';
import { HeartFilled, MessageFilled } from '@ant-design/icons';

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [1, 2, 3,4, 5, 6];
  const carouselRef = React.useRef(null);

 
  const handleDotClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
      setCurrentSlide(index);
    }
  };
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[660px] md:h-[500px] lg:h-[600px] bg-black/50"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlend: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-8">
              {t('home.title')}
            </h1>
            <br/>
            <div className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-xl">
              <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
              {t('home.subtitle')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-96">
              <Card className="bg-[#C1C1C1] backdrop-blur rounded-3xl">
                <h3 className="text-white mb-4">
                  <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
                  {t('home.cardDescription')}
                </h3>
                <Button className="!bg-primary rounded-3xl px-6 md:px-10 text-white border-none">
                  {t('home.startChat')}
                </Button>
              </Card>

              <Card className="bg-[#C1C1C1] backdrop-blur rounded-3xl">
                <h3 className="text-white mb-4">
                  <span className="font-bold">Tchat<span className="text-primary">Rencontre</span></span>
                  {t('home.cardDescription')}
                </h3>
                <Button className="rounded-3xl px-6 md:px-10 !bg-primary text-white border-none">
                  {t('home.startMeeting')}
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Active Rooms & Users Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">{t('home.activeRooms')}</h2>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg border">
                    <img
                      src={bgImage}
                      alt="User"
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm md:text-base">{t('home.adultRoom')}</h3>
                      <p className="text-xs md:text-sm text-gray-500">10 {t('home.connectedUsers')}</p>
                    </div>
                    <div>
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs md:text-sm">6</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">{t('home.connectedUsers')}</h2>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-lg border">
                    <img
                      src={bgImage}
                      alt="User"
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm md:text-base">{t('home.adultRoom')}</h3>
                      <p className="text-xs md:text-sm text-gray-500">10 {t('home.connectedUsers')}</p>
                    </div>
                    <div>
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs md:text-sm">6</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <Button className="!bg-primary px-6 md:px-10 rounded-3xl text-white border-none">
                {t('home.seeMore')}
              </Button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative h-48 sm:h-72 rounded-lg overflow-hidden bg-gray-100">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={bgImage}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-[#C84E31] text-xs md:text-sm px-2 py-0.5 rounded font-medium">
                        Premium
                      </span>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
                        <MessageFilled className='text-white'/>
                      </div>
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-white/50 rounded-lg shadow-lg flex items-center justify-center">
                        <HeartFilled className='text-primary'/>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 p-2 md:p-3 absolute bottom-0 right-0 left-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-xs md:text-sm text-gray-700">mathieu23</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner Section */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        <img 
          src={bgImagecontact}
          alt="Bridge"
          className="w-full h-full object-cover grayscale"
        />
        
        <div className="absolute inset-0">
          <div className="absolute top-4 md:top-8 lg:top-12 left-4 md:left-8 lg:left-12 max-w-[90%] md:max-w-lg bg-[#C1C1C1] backdrop-blur-sm rounded-2xl p-4 md:p-6">
            <div className="space-y-4">
              <h2 className="text-base md:text-xl">
                <span className="text-black font-medium">Tchat</span>
                <span className="text-[#C84E31] font-medium">Rencontre</span>
                <span className="text-black"> vous permet d'accéder aux annonces des personnes près de chez vous, au chat ainsi qu'aux salons de</span>
              </h2>
              <Button className="!bg-[#C84E31] text-white border-none rounded-full h-8 md:h-12">
                Sign up
              </Button>
            </div>
          </div>

          <div className="absolute bottom-4 md:bottom-8 lg:bottom-12 left-0 right-0 px-4">
            <div className="max-w-6xl mx-auto">
           
            <Carousel ref={carouselRef} {...carouselSettings}>
                {testimonials.map((item) => (
                  <div key={item} className="px-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                      <div className="bg-black/80 backdrop-blur text-white rounded-2xl p-4 md:p-6 w-full md:w-[400px] mx-auto">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={bgImagecontact}
                            alt="User"
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="text-[#C84E31] font-medium text-sm md:text-base">Florine R</h4>
                            <p className="text-xs md:text-sm text-gray-300">Femme, 28 ans, Bordeaux</p>
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-300">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className="flex justify-center gap-2 mt-4 md:mt-6">
              {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
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

export default Home;