// レスポンスからタスク情報だけを取得したい
const getTask = response =>{
  const task = [];
  const itemLength = response.ResultSet.totalResultReturned
  for (let index = 0; index < itemLength ; index++) {
    const item = response.ResultSet['0'].Result[index + ''];
    task.push({
      title: item.title,
      body: item.body,
    })
  }
  return task;
}

// 初期状態
const initialState = {
  projectId: undefined,
  task: undefined,
  error: false
};

export default (state = initialState, action) => {
  switch(action.type){
      //リクエスト開始時に状態をリセット
    case 'START_REQUEST':
      return {
        projectId: action.payload.projectId,
        task: undefined,
        error: false
      };

      // データ受信
    case 'RECEIVE_DATA':
      return action.payload.error
        ? {...state, error: true }
      : {
        ...state,
        task: getTask(action.payload.response)
      };

    default:
      return state;
  }
}
