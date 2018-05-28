import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { replace } from 'react-router-redux';

const API_URL = 'http://localhost:3000/projects/'
// const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
// const API_ID = 'dj00aiZpPW95cU5CN3BZenA5YyZzPWNvbnN1bWVyc2VjcmV0Jng9ZDg-'

const startRequest = project => ({
  type: 'START_REQUEST',
  payload: { project },
});

const receiveData = (project,error,response) => ({
  type: 'RECEIVE_DATA',
  payload: { project, error, response },
});

const finishRequest = project => ({
  type: 'FINISH_REQUEST',
  payload: { project },
})

export const fetchProject = projectId => {
  return async (dispatch, getState) => {
    const projects = getState().ProjectList.projects
    const project = projects.find(project => (project.id === projectId));
    // 対応するデータがない場合はトップページへリダイレクト
    if (typeof project === 'undefined'){
      dispatch(replace('/'));
      return;
    }
    dispatch(startRequest(project));

    // const queryString = qs.stringify({
    //   appid: API_ID,
    //   project_id: projectId,
    // });

    try {
      // const responce = await fetchJsonp(`${API_URL}?${queryString}`);
      const response = await fetchJsonp(`${API_URL}${projectId}`);
      const data = await response.json();
      dispatch(receiveData(projectId, null, data));
    } catch (err) {
      dispatch(receiveData(projectId,err));
    }
    dispatch(finishRequest(projectId));
  };
};
