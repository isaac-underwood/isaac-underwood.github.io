/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Isaac Underwood",
  title: "Hey, I'm Isaac",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with experience of building high quality Web applications with Typescript / React / C#.NET"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1WVLhAmXrh9-a0AxiERKAfcauH3ZkZgjn/edit?usp=sharing&ouid=105224870553008644531&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/isaac-underwood",
  linkedin: "https://www.linkedin.com/in/isaac-underwood-4083061a8/",
  gmail: "isaacund220220@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEER WITH A PASSION FOR BUILDING AWESOME, ACCESSIBLE USER EXPERIENCES",
  skills: [
    emoji(
      "⚡ Develop highly scalable, accessible and maintainable web applications"
    ),
    emoji("⚡ Provide high quality solutions to solve complex business problems"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-code"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "c#.net",
      fontAwesomeClassname: "fas fa-server"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Otago Polytechnic",
      logo: require("./assets/images/otagoPolytechnicLogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "February 2018 - November 2020",
      desc: "Took courses predominantly in Software Development as well as Security, Networking, A.I and Machine Learning.",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "35%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Education Perfect",
      companylogo: require("./assets/images/educationPerfectLogo.png"),
      date: "December 2022 – Present",
      desc: "Working in a high performing product team responsible for the core entities of the Education Perfect product.",
      descBullets: [
        "Shipping high-quality features to simplify the way teachers can set up classes",
        "Work on security improvements for the identity access management system",
        "Improving the product experience for internal and external users by building a new self-serve admin experience around the core entities of the product",
        "Contribute solutions to help create an amazing front-end developer experience, including GraphQL enhancements"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Education Perfect",
      companylogo: require("./assets/images/educationPerfectLogo.png"),
      date: "March 2021 – December 2022",
      desc: "Working in a cross-functional team to rebuild an area within the product in a scalable, maintainable and accessible micro front-end and microservice architecture, using GraphQL, React.js and C# .NET as part of the greenfield project.",
      descBullets: [
        "Fixing bugs and developing high-value features within the legacy monolithic product",
        "Communicating to a diverse group within the company, which includes translating technical ideas to non-technical people as well as demonstrating team progress to key stakeholders",
        "Being open and transparent and constantly sharing ideas within the team, as well as effectively reflecting on the team and oneself to be continuously improving",
        "Stepping up to help lead in the front end space within the team project"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Education Perfect",
      companylogo: require("./assets/images/educationPerfectLogo.png"),
      date: "January 2021 – March 2021",
      desc: "A 10-week internship working within an agile cross-functional team environment.",
      descBullets: [
        "Automation of regression testing using Cypress end-to-end testing",
        "Using problem solving skills to fix bugs within automated tests and the Education Perfect platform",
        "Data migration from SQL Server to PostgreSQL (in C#.NET)"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Otago Polytechnic",
      companylogo: require("./assets/images/otagoPolytechnicLogo.png"),
      date: "February 2019 – November 2020",
      desc: "Helping a diverse group of students to learn within lectures and tutorials, the following:",
      descBullets: [
        "Using an IDE to develop interactive, event-driven GUI and console-based applications",
        "Basic principles of Object-Oriented analysis, design and programming, including inheritance, polymorphism and encapsulation",
        "Good programming practices, including version control (Git) and code commenting"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications I am working towards obtaining",

  achievementsCards: [
    {
      title: "IAAP Certified Professional in Accessibility Core Competencies (CPACC)",
      subtitle:
        "To enhance my knowledge on the broad accessibility domain, I am working towards obtaining a CPACC certification.",
      image: require("./assets/images/cpacc-logo.png"),
      footerLink: [
        {
          name: "Certification details",
          url: "https://www.accessibilityassociation.org/s/certified-professional"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: greeting.gmail
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
