import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const API_URL = 'http://localhost:3000/projects/'
// const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
// const API_ID = 'dj00aiZpPW95cU5CN3BZenA5YyZzPWNvbnN1bWVyc2VjcmV0Jng9ZDg-'

const startRequest = projectId => ({
  type: 'START_REQUEST',
  payload: { projectId },
});

const receiveData = (projectId,error,response) => ({
  type: 'RECEIVE_DATA',
  payload: { projectId, error, response },
});

const finishRequest = projectId => ({
  type: 'FINISH_REQUEST',
  payload: { projectId },
})

export const fetchProject = projectId => {
  return async dispatch => {
    dispatch(startRequest(projectId));

    // const queryString = qs.stringify({
    //   appid: API_ID,
    //   project_id: projectId,
    // });

    try {
      // const responce = await fetchJsonp(`${API_URL}?${queryString}`);
      const response = await fetchJsonp(`${API_URL}${projectId}`);
      const data = await response.json();
      console.log(data);
      dispatch(receiveData(projectId, null, data));
    } catch (err) {
      dispatch(receiveData(projectId,err));
    }
    dispatch(finishRequest(projectId));
  };
};
