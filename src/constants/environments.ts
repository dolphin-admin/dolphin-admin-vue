export const GlobalEnvConfig = Object.freeze({
  API_PREFIX: import.meta.env.VITE_API_PREFIX ?? '',
  PORT: import.meta.env.VITE_PORT ?? '',
  API_PROXY: import.meta.env.VITE_API_PROXY ?? '',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD
})
