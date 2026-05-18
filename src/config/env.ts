/**
 * check if current environment is production
 */
export const isProductionEnvironment: boolean = import.meta.env.PROD

/**
 * authentication api url for production environment
 *
 * use window.location.origin because vercel will replace it with the production url
 */
export const productionAuthApiUrl: string = `${window.location.origin}/api/auth`

/**
 * authentication api url for development environment
 *
 * example: http://localhost:3000/api/auth
 */
export const developmentAuthApiUrl: string = `${import.meta.env.VITE_SERVER_URL}/api/auth`

/**
 * base api url for development environment
 *
 * example: http://localhost:3000/api
 */
export const developmentApiBaseUrl: string = `${import.meta.env.VITE_SERVER_URL}/api`
