import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Nav({ projects }){
  //
  const to = project =>(
    project.id === '1'
      ? '/all'
      : `/project/${project.id}`
  );
  return (
      <ul>
      {
        projects.map(project => (
          <li key={`nav-item-${project.id}`}>
          <Link to={to(project)}>
          {project.title}
        </Link>
          </li>
      ))}
      </ul>
  );
}
Nav.propTypes = {
  // state.shopping.categorisの構造??
  // 一応state.ProjectList.projectsの構造を模倣
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired
};
