import React from 'react';
import PropTypes from 'prop-types';

export default class Project extends React.Component {
  // export default function Project({ projectId }){
  componentWillMount() {
    this.props.onMount(this.props.projectId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.projectId !== nextProps.projectId) {
      // props.projectIdに変化があるので、ページ遷移が発生している
      this.props.onUpdate(nextProps.projectId);
    }
  }

  render(){
    const { project, task, error} = this.props;
    return(
        <div>
        <h2>{
          typeof project !== 'undifined'
            ? `${project.title}のタスク`
            : 'からのタスク'
        }</h2>
        {(() => {
          if (error) {
            // エラー表示
            return <p>エラーが発生しました。リロードしてください</p>;
          } else if (typeof task === 'undifined'){
            // リクエスト完了前
            return <p>読み込み中...</p>;
          } else {
            return (
                <ol>
                {task.map(item => (
                    <li key={`project-item-${item.id}`}>
                    {item.title}
                    </li>
                ))}</ol>
            );
          }
        })()}
        </div>
    );
  }
}
Project.propTypes = {
  projetId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  // project, task, errorの型を追加
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool.isRequired
};
Project.defaultProps = {
  projectId: '1'
};
