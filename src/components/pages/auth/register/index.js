import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import SectionDaftar from './components/SectionDaftar';

const RegisterPage = () => {
  return (
    <div className="flex">
      <CarouselBanner className="h-[1024px] tall:h-[900px]" />
      <SectionDaftar margin="lg:mt-24 tall:mt-8" />
    </div>
  );
};

export default RegisterPage;
