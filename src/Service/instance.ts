import axios from 'axios';

const instance = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  headers: {
    'Content-Type': 'application/json',
    // Authenticate the request
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
  },
});
export default instance;
