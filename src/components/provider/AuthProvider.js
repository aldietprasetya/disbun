import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from 'src/redux/slices/auth';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();


  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  const backToLogin = useCallback(() => {
    if (!router.pathname.match('auth')) {
      if (!isAuthenticated) {
        router.push('/auth/login');
      }
    }
  }, [isAuthenticated, router.pathname]);

  // useEffect(() => {
  //   backToLogin();
  // }, [backToLogin]);

  const backToHomeWhenLogged = useCallback(() => {
    if (router.pathname.match('login')) {
      if (isAuthenticated && user.roleId === 1) {
        router.push('/');
      } else if (isAuthenticated && user.roleId !== 1) {
        // router.push('/admin/infografis');
        router.push('/');
      }
    }
  }, [user, router.pathname, isAuthenticated]);

  useEffect(() => {
    backToHomeWhenLogged();
  }, [backToHomeWhenLogged]);

  const protectedRoute = useCallback(() => {
    // const token = Cookies.get('token');
    // if (!token) {
    //   router.push('/login');
    // }

    if (router.pathname.match('admin')) {
      if (user.roleId === 1) {
        router.push('/');
      }
    }

  }, [user, router.pathname]);

  useEffect(() => {
    protectedRoute();
  }, [protectedRoute]);

  return <>{children}</>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
