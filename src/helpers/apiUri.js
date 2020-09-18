const apiUri = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URI_PRODUCTION : process.env.REACT_APP_API_URI_DEV;

export default apiUri;
