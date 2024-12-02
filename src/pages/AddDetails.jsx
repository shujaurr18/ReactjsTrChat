import React from 'react';
import { Button } from 'antd';
import bgImage from '@/assets/bgimage.png';

const AddDetails = () => {
  const placeholderImage = "/api/placeholder/400/320";
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="  mx-auto space-y-8">
        <div className=" rounded-xl shadow-sm p-6 pt-0">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-start gap-4  lg:w-1/3">
              <div className=" p-4 pt-0 rounded-xl shadow-sm">
                <div className="flex items-center ">
               
               
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
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3  ">
              <p className="text-gray-600">
             <div className='md:mt-24 mt-0 '></div>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


              </p>
            </div>
          </div>
        </div>
<div className="bg-white p-3">
    
<div className="flex max-w-4xl m-auto flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={bgImage}
              alt="Announcement"
              className="w-full  object-cover"
            />
          </div>
        </div>
</div>

        <div className="bg-[#B4573B]  p-6 py-10 text-white " style={{margin:0}}>
            <div className="max-w-4xl mx-auto">

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="space-y-2">
              <div>Genre</div>
              <div>Age</div>
              <div>Catégorie</div>
            </div>
            <div className="space-y-4 mt-4 lg:mt-0">
              <Button className="w-40 bg-white text-black hover:bg-gray-100 rounded-2xl">
                Chat
              </Button>
              <div className="text-center">
                <a href="#" className="text-white underline hover:no-underline">
                  Voir le téléphone
                </a>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;