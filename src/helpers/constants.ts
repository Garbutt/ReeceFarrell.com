export const DEVELOPMENT_URL: string = 'http://localhost:1234';
export const PRODUCTION_URL: string = '';
export const SITE_URL: string = import.meta.env.PROD ? PRODUCTION_URL : DEVELOPMENT_URL;
