import { connect } from 'react-redux';
import Project from '../components/Project';
import * as actions from '../actions/Project';

const mapStateToProps = (state,ownProps) => ({
  projectId: ownProps.projectId,
  //
  project: state.Project.project,
  task: state.Project.task,
  error: state.Project.error
})

const mapDispatchToProps = (dispath,ownProps) => ({
  onMount(projectId){
    dispath(actions.fetchProject(projectId));
  },
  onUpdate(projectId){
    dispath(actions.fetchProject(projectId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
