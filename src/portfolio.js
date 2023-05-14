/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Isaac's Portfolio",
  description:
    "A passionate Software Engineer 🚀 with experience of building accessible, scalable and high-quality web applications with Typescript / React / C#.NET",
  og: {
    title: "Isaac Underwood Portfolio",
    type: "website",
    url: "http://isaac-underwood.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Isaac Underwood",
  logo_name: "IsaacUnderwood",
  subTitle:
    "A passionate Software Engineer 🚀 with experience of building accessible, scalable and high-quality web applications with Typescript / React / C#.NET",
  resumeLink:
    "https://docs.google.com/document/d/1SgU1e2e_iczPrwwBP_vHmN7kj48TDOx5/edit?usp=sharing&ouid=105224870553008644531&rtpof=true&sd=true",
  portfolio_repository: "https://github.com/isaac-underwood",
  githubProfile: "https://github.com/isaac-underwood",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/isaac-underwood",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/isaac-underwood-4083061a8/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building awesome, accessible, scalable and maintainable user experiences",
        "⚡ Building features in the backend using C#.NET",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#fff",
            color: "#007acc",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "C#.NET",
          fontAwesomeClassname: "fa-code",
          style: {
            color: "#1e3050",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Otago Polytechnic",
      subtitle: "Bachelor of Information Technology",
      logo_path: "op-logo.png",
      alt_name: "Otago Polytechnic",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ Took courses predominantly in Software Development as well as Security, Networking, A.I and Machine Learning",
        "⚡ As part of a final year project, I worked on an A.I project - more specificially, natural language processing of Twitter tweets",
      ],
      website_link: "https://www.op.ac.nz/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IAAP Certified Professional in Accessibility Core Competencies (CPACC)*",
      subtitle: "* I am currently working towards obtaining this certification.",
      logo_path: "cpacc-logo.png",
      certificate_link:
        "https://www.accessibilityassociation.org/s/certified-professional",
      alt_name: "International Association of Accessibility Professionals",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have been working for a high growth EdTech SaaS company for over 2 years, predominantly as a front end software engineer, as my passion is to create amazing user experiences.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Education Perfect",
          company_url: "https://educationperfect.com/",
          logo_path: "educationPerfectLogo.png",
          duration: "December 2022 - Present",
          location: "Dunedin, New Zealand",
          description:
            `Working in a high performing product team responsible for the core entities of the Education Perfect product. This includes:
            ⚡ Shipping high-quality features to simplify the way teachers can set up classes.
            ⚡ Improving the product experience for internal and external users by building a new self-serve admin experience around the core entities of the product.
            ⚡ Contributing solutions to help create an amazing front-end developer experience, including GraphQL enhancements.
            `,
          color: "#0879bf",
        },
        {
          title: "Associate Software Engineer",
          company: "Education Perfect",
          company_url: "https://educationperfect.com/",
          logo_path: "educationPerfectLogo.png",
          duration: "March 2021 - December 2022",
          location: "Dunedin, New Zealand",
          description:
            `Working in a cross-functional team to rebuild an area within the product in a scalable, maintainable and accessible micro front-end and microservice architecture, using GraphQL, React.js and C# .NET as part of the greenfield project. In addition to this, I stepped up to help lead in the front end space within the team project, where I learnt numerous invaluable things.`,
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Education Perfect",
          company_url: "https://educationperfect.com/",
          logo_path: "educationPerfectLogo.png",
          duration: "January 2021 - March 2021",
          location: "Dunedin, New Zealand",
          description:
            "An immersive 10-week internship where I contributed to automating regression testing using Cypress end-to-end testing, fixed bugs within existing automated tests and the wider product, and data migration from SQL Server to PostgreSQL.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I am currently working on a web project which uses the Spotify API to give immersive and interesting visualisations of songs.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
};
