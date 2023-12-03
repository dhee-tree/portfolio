import React, {
  Component
} from 'react';
import {
  ExternalLink
} from 'react-external-link';
/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ighomena Daniel Odebala",
  title: "Hi there",
  subTitle: "I'm Ighomena, a Junior Software Engineer 🚀 I have experience in developing web applications using Django, Laravel, React Js, and Flask. I am constantly learning and expanding my knowledge on other libraries and developing my skills. This is my portfolio, here you would find links to all my socials and details about projects I have worked on or currently working on. Feel free to explore and hopefully, looking forward to hearing from you cheers.",
  resumeLink: "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhee-tree",
  linkedin: "https://www.linkedin.com/in/ighomena-daniel-odebala-a22811203/",
  twitter: 'https://twitter.com/ighomena__',
  instagram: 'https://www.instagram.com/dhee_tree/',
  // gmail: "ighoodes@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/ighomena.odebala",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE ENGINEER IMPROVING HIS SKILLS REGULARLY WITH PROJECTS.",
  skills: [
    emoji(
      "⚡ Deliver interactive and responsive web applications using latest technology."
    ),
    emoji("⚡ Optimise website to be more SEO friendly contents."),
    emoji(
      "⚡ Develop secure website with latest certificates and best practices."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [{
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Web Developer",
      company: "Electric Discussions",
      companylogo: require("./assets/images/edLogo.jpg"),
      date: "September 2020 - Present",
      desc: "Electric Discussions is an online community of aspiring individuals, seeking to grow and mature their understanding of issues that affect every single individual, as they go through life.",
      descBullets: [
        // "Disscussing life chanllenges",
        // "Developing communication skills",
        // "Creating tutorials",
        <ExternalLink href="https://ed.ighomena.me/" class="major">Visit Electric Discussions</ExternalLink>,
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "Best IT Teacher",
      companylogo: require("./assets/images/pcLogo.jpg"),
      date: "Apr 2022 - Present",
      desc:
        "Best IT Teacher is a web app that allows students to vote for the best teacher for the academic year. Users can register, login and cast vote and the can also view the result after voting is finished.",
      descBullets: [
        <ExternalLink href="https://iegvote.ighomena.me/" class="major">Visit Best IT Teacher</ExternalLink>,
      ],
    },
    {
      role: "Web Developer",
      company: "AI Parent",
      companylogo: require("./assets/images/aiparent.png"),
      date: "Feb 2023 - Present",
      desc:
        "AI Parent is a web app that allows parents to generate ChatGPT content to educate or entertain their kids. Users can enter a prompt and the app will generate a story based on the topic, or they could select from a list of pre-generated prompts.",
      descBullets: [
        <ExternalLink href="https://aiparent.ighomena.me/" class="major">Visit AI Parent</ExternalLink>,
      ],

    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dhee-tree", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "DIY & Robots 🤖",
  subtitle: "BUILDING MY PC AND ARDUINO PROJECTS.",
  projects: [{
      image: require("./assets/images/elon.jpg"),
      projectName: "Elon",
      projectDesc: "Elon is my self built PC.",
      footerLink: [{
          name: "View on Instagram",
          url: "https://www.instagram.com/p/CC3bXP0gBNR/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zeus.jpg"),
      projectName: "Zeus",
      projectDesc: "Zeus is arduino based robot that can be controlled via a mobile app.",
      footerLink: [{
        name: "View on Instagram",
        url: "https://www.instagram.com/p/CL2yPpzjfZ4/"
      }]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Secondary Projects 🐍"),
  subtitle: "Links to my some of my projects on replit! Just click the link and press play! Enjoy",

  achievementsCards: [{
      title: "Password Generator",
      subtitle: "Generates a secure password, choose password length, add numbers and symbols.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/Day-5-Password-Generator"
      }]
    },

    {
      title: "Resturant Bill Split",
      subtitle: "I split any bill between friends, i.e resturant bills. Psst! I Can split bills too.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/day-4-2-Resturant-bill-payer"
      }]
    },

    {
      title: "Rock Paper Scissors",
      subtitle: "Play Rock Paper Scissors with the computer.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/Day-4-Rock-Paper-Scissors"
      }]
    },

    {
      title: "Love Calculator",
      subtitle: "Calculate the love score with your partner or crush.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/day-3-5-Love-calculator"
      }]
    },

    {
      title: "Treasure Island",
      subtitle: "Can you pass the obstacles to find the treasure?",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/day-3-Treasure-island"
      }]
    },

    {
      title: "Hangman",
      subtitle: "Guess the hidden word, or get the noose.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/Day-7-Hangman"
      }]
    },

    {
      title: "Ceaser Cipher",
      subtitle: "Encode and decode messages with friends.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/Day-8-Caesar-cipher"
      }]
    },

    {
      title: "Blackjack",
      subtitle: "Try beat the computer in a game of Blackjack.",
      image: require("./assets/images/python.png"),
      footerLink: [{
        name: "View",
        url: "https://replit.com/@Ighomena/Day-10-Blackjack"
      }]
    }
  ],
  display: true // Set false to hide this section, defaults to true.
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [{
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "contact@ighomena.me"
  // number: "(323) 768 0674",
};

// Twitter Section

const twitterDetails = {
  userName: "dhee_tree", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  twitterDetails
};