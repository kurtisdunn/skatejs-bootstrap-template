import 'whatwg-fetch';
import config from './config';
import cookie from 'js-cookie';
import page from 'page';


function checkStatus (response) {

  if (response.status >= 200 && response.status < 300) {
    return response;
    
 } else if(response.status === 500) {
   return response;
   
  } else {
    var error = new Error(response.statusText);
    error.response = response.json();
    throw error;
  }
}

function parseJson (response) {
  if(response){ return response.json(); }
}

export default function (path, opts = {}) {
  const token = cookie.getJSON('token');
  
  if (!opts.headers) {
    opts.headers = {};
  }

  if (token) {
    opts.headers['Authorization'] = `Bearer ${token.access}`;
  }

  return fetch(`${config.apiBaseUrl}/${path}`, opts)
    .then(checkStatus)
    .then(parseJson);
}
