module.exports = {
  siteTitle: 'Austin Ellingwood | Personal Site',
  siteDescription: `Static site built using GatsbyJS for Austin Ellingwood personal use.`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Austin Ellingwood',
  twitterUsername: 'austinelwood',
  githubUsername: 'austinellingwood',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `Engineer with a strong desire to learn. I have been working on static sites as I have started to see them pop up in my job. <br />
    I started at Virtusa in 2018 as an intern, knowing I had a lot to learn. I have quickly become the go-to guy for new AWS projects.
    Working on serverless sites has been a blast and I have enjoyed learning about React and integrating it with various backend API's<br />
    I am currently in San Francisco working remotely for Virtusa. My main projects have been HIPAA compliant environments in AWS, but lately I have been working on <a href="https://www.myquikcard.com/" target="_blank">personal</a> serverless architecture projects using <strong>Python, NodeJS and React.</strong>`,
  skills: [
    {
      name: 'AWS',
      level: 80
    },
    {
      name: 'Python',
      level: 65
    },
    {
      name: 'AWS Lambda',
      level: 70
    },
    {
      name: 'AWS API Gateway',
      level: 70
    },
    {
      name: 'Serverless Architecture',
      level: 65
    },
    {
      name: 'React',
      level: 40
    }
  ],
  jobs: [
    {
      company: "Virtusa",
      begin: {
        month: 'feb',
        year: '2018'
      },
      duration: null,
      occupation: "AWS Architect",
      description: "I design and build AWS environments for small and large companies, some requiring HIPAA compliance and/or serverless architectures."
  
    }, {
      company: "Various",
      begin: {
        month: 'may',
        year: '2015'
      },
      duration: '3 yrs +',
      occupation: "Intern",
      description: "I have interned at multiple companies in various roles. At Handshake I was a jack of all trades, at enFocus I used Python to automate some workflows/analytics, and at Archon Tech I did some iOS development work."
    }, {
      company: "Wabash College",
      begin: {
        month: 'aug',
        year: '2014'
      },
      duration: '4 yrs',
      occupation: "Student",
      description: "Student at Wabash College where I played baseball, ran track, was part of a fraternity, and more. I was an Economics major (no CS major at the time) and a CS minor."
  
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/austinelwood",
    linkedin: "https://www.linkedin.com/in/austin-ellingwood",
    github: "https://github.com/austinellingwood",
    email: "austinellingwood@gmail.com"
  },
  siteUrl: 'https://aecloud.co',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-130615059-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/cloud-coding-small.png',
  headerLinks: [
    {
      label: 'Austin Ellingwood',
      url: '/',
    }
  ]
}
