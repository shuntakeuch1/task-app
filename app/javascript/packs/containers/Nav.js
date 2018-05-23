import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  // state.projects.projectsをprops.projectsに紐づけ
  // projects: state.projectlist.projects
  projects: state.ProjectList.projects
});

export default connect(mapStateToProps)(Nav);
