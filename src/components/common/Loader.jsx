import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
    <Spin size="large" />
  </div>
);

export default Loader;