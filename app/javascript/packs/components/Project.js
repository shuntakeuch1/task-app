import React from 'react';
import PropTypes from 'prop-types';

export default function Project({ projectId }){
  //最終的にはprojectIdを元にAPIから情報を取得したい
  return(
      <div>
      <h2>Projectコンポーネント</h2>
      <p>プロジェクトID: {projectId}</p>
      </div>
  )
}
Project.propTypes = {
  projetId: PropTypes.string
};
Project.defaultProps = {
  projectId: '1'
};
