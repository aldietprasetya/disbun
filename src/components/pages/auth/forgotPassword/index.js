import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import SectionCreatePassword from './components/SectionCreatePassword';

const ForgotPasswordPage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] ">
      <CarouselBanner />
      <SectionCreatePassword />
    </div>
  );
};

export default ForgotPasswordPage;
