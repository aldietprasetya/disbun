/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';
import { appConfig } from 'src/config';
import axiosInstance from 'src/lib/axios';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  user: {},
  isAuthenticated: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALIZE
    getInitialize(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },

    // LOGIN
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },

    // LOGOUT
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

const isValidToken = (token) => {
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (token) => {
  if (token) {
    Cookies.set('token', token, {
      expires: 100 / 1440,
    });
  } else {
    Cookies.remove('token');
  }
};

export function login({ token, user }) {
  return async (dispatch) => {
    setSession(token);
    dispatch(
      slice.actions.loginSuccess({
        user: user,
      }),
    );
  };
}

export function logout() {
  return async (dispatch) => {
    setSession(null);
    dispatch(slice.actions.logoutSuccess());
  };
}

export function initialize() {
  return async (dispatch) => {
    try {
      const token = Cookies.get('token');
      if (token) {
        const res = await axios.get(`${appConfig.baseUrl}/profile/v1/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.status == 'success') {
          dispatch(
            slice.actions.getInitialize({
              user: res.data.data,
              isAuthenticated: true,
            }),
          );
        }
      } else {
        dispatch(
          slice.actions.getInitialize({
            user: {},
            isAuthenticated: false,
          }),
        );
      }
    } catch (error) {
      dispatch(
        slice.actions.getInitialize({
          user: {},
          isAuthenticated: false,
        }),
      );
    }
  };
}
