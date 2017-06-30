import { loreumIpsum } from './util';
import { makeTrees } from './makeTree'

const history = [
  {
    id: 0,
    parentId: null,
    title: 'USMC Student/Influencer Programs',
    subtitle: 'A suite of applications',
    about: loreumIpsum('0'),
    contributions: [
      {
        id: 1,
        projectId: 0,
        cascade: true,
        brief: 'Automated functional and unit testing',
        story: loreumIpsum('0.1')
      },
      {
        id: 2,
        projectId: 0,
        cascade: true,
        brief: 'Code documentation',
        story: loreumIpsum('0.2')
      },
    ]
  },
  {
    id: 1,
    parentId: 0,
    title: 'Siprm',
    subtitle: 'A public full-stack Symfony application',
    about: loreumIpsum('1'),
    contributions: [],
  },
  {
    id: 2,
    parentId: 0,
    title: 'Pam',
    subtitle: 'A client facing full-stack Symfony application',
    about: loreumIpsum('2'),
    contributions: [],
  },
  {
    id: 3,
    parentId: 1,
    title: 'Initial development and launch',
    subtitle: 'The first phase',
    about: loreumIpsum('3'),
    contributions: [
      {
        id: 3,
        projectId: 3,
        cascade: false,
        brief: 'Authored Symfony bundles for dynamic form-building functionality',
        story: loreumIpsum('3.3: Took remotely-stored form configurations and converted them into Symfony forms. The advantage being forms could be reused in multiple applications and rre-configured in one remote location.')
      },
      {
        id: 4,
        projectId: 3,
        cascade: false,
        brief: 'Authored SOAP parsing bundles',
        store: loreumIpsum('3.4')
      }
    ]
  },
  {
    id: 4,
    parentId: 1,
    title: 'Post-launch maintenance',
    subtitle: 'The second phase',
    about: loreumIpsum('4'),
    contributions: [
      {
        id: 5,
        projectId: 4,
        cascade: false,
        brief: 'Troubleshooted production issues',
        story: loreumIpsum('4.5')
      },
    ]
  },
  {
    id: 5,
    parentId: null,
    title: 'Siprm 2.0',
    subtitle: 'A complete rewrite of Siprm',
    about: loreumIpsum('5'),
    contributions: [
      {
        id: 6,
        projectId: 5,
        cascade: false,
        brief: 'Initiated and architected the entire project across full stack',
        story: loreumIpsum('6.5')
      },
    ]
  },
  {
    id: 6,
    parentId: 5,
    title: 'Converted API into domain-driven microservices',
    subtitle: 'Breaking up the monolith',
    about: loreumIpsum('6'),
    contributions: [
      {
        id: 7,
        projectId: 6,
        cascade: false,
        brief: 'REST frameworks',
        story: loreumIpsum('7.6'),
      },
      {
        id: 8,
        projectId: 6,
        cascade: false,
        brief: 'Secured API with OWASP practices',
        story: loreumIpsum('8.6'),
      },
    ]
  },
  {
    id: 7,
    parentId: 5,
    title: 'React client',
    subtitle: 'Modernizing the front end',
    about: loreumIpsum('7'),
    contributions: [
      {
        id: 9,
        projectId: 7,
        cascade: false,
        brief: 'Created React UI',
        story: loreumIpsum('9.7'),
      },
    ]
  },
];

export default makeTrees(history);