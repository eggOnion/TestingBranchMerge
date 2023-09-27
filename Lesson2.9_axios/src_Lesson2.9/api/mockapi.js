import axios from 'axios';

//System constrants, we ususally use SCREAMING_SNAKE_CASE
const BASE_URL = 'https://62ba9b04573ca8f8328762ca.mockapi.io';

// Create axios instance for our API
// The config contains the base url which is the URL for all requests to the API
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;