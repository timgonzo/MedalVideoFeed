import axios from "axios";
axios.defaults.withCredentials = true;
// Add a request interceptor
axios.interceptors.request.use(function(config) {
  config.withCredentials = true;
  return config;
});

/**
 * Will unpack the response body from reponse object
 * @param {*} response
 *
 */
const onGlobalSuccess = response => {
  /// Should not use if you need access to anything other than the data
  return response.data;
};

const onGlobalError = err => {
  return Promise.reject(err);
};

export { onGlobalError, onGlobalSuccess };
