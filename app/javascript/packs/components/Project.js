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
    return(
        <div>
        <h2>Projectコンポーネント</h2>
        <p>プロジェクトID: {this.props.projectId}</p>
        </div>
    );
  }
}
Project.propTypes = {
  projetId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
Project.defaultProps = {
  projectId: '1'
};
