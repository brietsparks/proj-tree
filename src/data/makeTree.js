import { cloneDeep, filter, map } from 'lodash';

export const makeTrees = (flatProjects = []) => {
  const trees = [];
  const projects = cloneDeep(flatProjects);

  projects.forEach(project => {
    if (project.parentId === null) {
      trees.push(makeTree(project, projects))
    }
  });

  return trees;
}

const makeTree = (project, allProjects) => {
  const parent = cloneDeep(project);

  let children = filter(allProjects, p => p.parentId === parent.id);

  children = map(children, child => makeTree(child, allProjects));

  parent.childProjects = children;

  return parent;
};