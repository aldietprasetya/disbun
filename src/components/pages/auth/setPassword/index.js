import React, { useEffect, useState } from 'react';
import CarouselBanner from '../components/CarouselBanner';
import SectionCreatePassword from './components/SectionCreatePassword';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import SectionSendEmail from './components/SectionSendEmail';
import moment from 'moment';

const SetPasswordPage = () => {
  const route = useRouter();
  const [activeState, setActiveState] = useState('INPUT_PASSWORD');
  const [selectedEmail, setSelectedEmail] = useState({
    email: '',
    dateSend: '',
  });
  useEffect(() => {
    const tokenSetPassword = Cookies.get('token-temp');
    if (!tokenSetPassword) {
      route.push('/register');
    }
  }, []);

  const handleSuccessInputPassword = (email) => {
    setSelectedEmail({
      ...selectedEmail,
      email: email,
      dateSend: moment().add(3, 'minutes'),
    });
    setActiveState('SEND_EMAIL');
  };
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <CarouselBanner />
      {activeState === 'INPUT_PASSWORD' && (
        <SectionCreatePassword handleNextState={handleSuccessInputPassword} />
      )}
      {activeState === 'SEND_EMAIL' && (
        <SectionSendEmail
          email={selectedEmail.email}
          date={selectedEmail.dateSend}
          title="Verifikasi Email"
          description="Kami telah mengirimkan verifikasi ke alamat email yang anda gunakan."
        />
      )}
    </div>
  );
};

export default SetPasswordPage;
