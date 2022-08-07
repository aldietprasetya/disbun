import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import axios from 'axios';
import { appConfig } from 'src/config';
import Cookies from 'js-cookie';
import LoginLogo from '../../components/Login/LoginLogo';

const SectionSendEmail = ({ email, date, title, description }) => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(null);
  const [countDownSendEmail, setCountDownSendEmail] = useState('');

  useEffect(() => {
    if (date) {
      setCountDownSendEmail(date);
    }
  }, [date]);

  const calculateTimeLeft = (date) => {
    const difference = moment(date).diff(new Date());

    if (difference > 0) {
      return {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      minutes: 0,
      seconds: 0,
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (date) {
        setTimeLeft(calculateTimeLeft(countDownSendEmail));
      }
    }, 1000);

    console.log(timeLeft)
    return () => clearTimeout(timer);
  }, [timeLeft, countDownSendEmail]);

  const handleSendAgainEmailVerification = async () => {
    try {
      const token = Cookies.get('token-temp');
      const res = await axios.get(
        `${appConfig.baseUrl}/users/password/${email}`
      );
      if (res.data.status == 'success') {
        setCountDownSendEmail(moment().add(3, 'minutes'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <LoginLogo />
      <div className="flex h-[400px] w-full flex-col items-center justify-center">
        <img src="/icon/email-illustration.svg" className="w-[150px]" />
        <div className="mt-5 text-2xl font-semibold">{title}</div>
        <div className="mt-1 w-[70%] text-center text-sm text-[#9E9E9E]">
          {description}
        </div>
        <div className="my-3 text-sm font-semibold text-[#3267E3]">{email}</div>
        <div className="text-sm text-[#FF4D49]">{`(0${timeLeft?.minutes} : ${
          timeLeft?.seconds >= 10 ? timeLeft?.seconds : `0${timeLeft?.seconds}`
        })`}</div>
        {(timeLeft.minutes === 0 && timeLeft.seconds === 0) && (
          <div className="mt-3 text-sm text-[#9E9E9E]">
            Belum menerima surel?{' '}
            <span
              onClick={handleSendAgainEmailVerification}
              className="cursor-pointer text-primary-green"
            >
              Kirim Ulang
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionSendEmail;
