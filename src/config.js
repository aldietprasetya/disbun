export const appConfig = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  appKey: process.env.NEXT_PUBLIC_KEY,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  usernameBasicAuth: process.env.NEXT_PUBLIC_USERNAME_BASIC_AUTH,
  passwordBasicAuth: process.env.NEXT_PUBLIC_PASSWORD_BASIC_AUTH,
};
