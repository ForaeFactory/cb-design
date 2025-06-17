import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/projects',
  },
  {
    label: 'Snapshot',
    pathname: '/#details',
  },
  {
    label: 'Toolbox',
    pathname: '/toolbox',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  // {
  //   label: 'Figma',
  //   url: `https://www.figma.com/${config.figma}`,
  //   icon: 'figma',
  // },
  // {
  //   label: 'Github',
  //   url: `https://github.com/${config.github}`,
  //   icon: 'github',
  // },
];
