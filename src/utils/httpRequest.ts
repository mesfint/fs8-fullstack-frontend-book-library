export const apiUrl = process.env.REACT_APP_API_URL;

const httpRequest = (url: RequestInfo, init?: RequestInit): Promise<any> => {
  console.log('INIT', init);
  return fetch(`${apiUrl}${url}`, init)
    .then(res => res.json())
    .then(res => {
      if(res.error) {
        throw res.error;
      }
      return res;
    })
};

export default httpRequest;