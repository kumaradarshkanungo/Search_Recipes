import * as constants from './Constants';

const generateRequestURL = requestData => {
  return `${constants.URI}app_id=${constants.app_id}&app_key=${constants.app_key}&${requestData}`;
}

export const getRecipes = async requestData => {
  const reqURI = generateRequestURL(requestData);
  return fetch(reqURI)
  .then(response => response.json())
  .then(data => data);
}