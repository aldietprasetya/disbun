export const appConfig = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || 'development',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL + process.env.NEXT_PUBLIC_BASE_URL_VERSION,
};
