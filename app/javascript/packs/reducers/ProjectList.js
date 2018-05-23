const initialState = {
  // ユーザー毎のプロジェクト情報
  // TODO:本来はプロジェクトIDの一覧を取得すべき
  projects:[
    {
      id: '1',
      title: 'First Project'
    },
    {
      id: '2',
      title: 'Secound Project'
    }
  ]
};

export default () => initialState;
