module.exports = {
  siteTitle: 'Velmurugan | Front-End Software Engineer',
  siteDescription: 'Design-minded software engineer based in chennai, india, Pixel perfect design.',
  siteKeywords:
    'Velmurugan, Velmuruganui, Velmuruganfrontenddeveloper, software engineer, front-end engineer, web developer, javascript, chennai, india',
  siteUrl: 'https://www.velmuruganui.com/',
  siteLanguage: 'en_US',

  googleVerification: '',

  name: 'Velmurugan',
  location: 'Chennai, India',
  email: 'Velmurugan.mg@outlook.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/velmuruganfrontend/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/velmurugan346/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/velmuruganfrontend/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/velu_goutham/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/velmuruganUI/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@velmuruganUI',
  googleAnalyticsID: 'UA-130506502-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
