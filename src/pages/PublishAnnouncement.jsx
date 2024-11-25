import React, { useState } from 'react';
import { Input, Select, Upload, Button, Card } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;

const PublishAnnouncement = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      setImageUrl(URL.createObjectURL(info.file.originFileObj));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#B4573B] py-10 p-4 text-white text-center text-xl">
        Publier une annonce
      </div>
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <TextArea 
          placeholder="Description..." 
          rows={6}
          className="rounded-3xl"
        />
        <Select
          placeholder="Catégorie"
          className="w-full rounded-full"
        >
          <Select.Option value="cat1">Catégorie 1</Select.Option>
          <Select.Option value="cat2">Catégorie 2</Select.Option>
        </Select>
      
        <Input 
        
        placeholder="File" 
      //   rows={6}
    //   type='file'
        className="rounded-3xl"
      />
        {imageUrl && (
          <div className="w-16 h-16 mt-2">
            <img src={imageUrl} alt="Upload" className="w-full h-full object-cover rounded-lg"/>
          </div>
        )}
        <Button 
          type="primary"
          className="w-40 mx-auto block bg-[#B4573B] hover:bg-[#8B4431] rounded-full"
        >
          Publier
        </Button>
      </div>
    </div>
  );
};

const MyAnnouncements = () => {
    const navigate=useNavigate()
  const announcements = [
    { id: 1, title: 'Titre annonce' },
    { id: 2, title: 'Titre annonce' },
    { id: 3, title: 'Titre annonce' },
    { id: 4, title: 'Titre annonce' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#B4573B] p-4 text-white text-center text-xl">
        Mes annonces
      </div>
      <div className=" mx-auto ">
        {announcements.map(announcement => (
          <Card 
            key={announcement.id}
            onClick={() => navigate(`/my-adds/${announcement.id}`)}

            className="hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="text-lg">{announcement.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export { PublishAnnouncement, MyAnnouncements };