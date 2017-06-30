import React from 'react';
import { connect } from 'react-redux';

import Project from '../components/Project';

export class RootContainer extends React.Component {
  render() {
    const components = this.props.projects.map(project => {
      console.log(project);
      return <Project
        key={project.id}
        {...project}
      />
    });
    
    return (
      <div>
        {components}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
