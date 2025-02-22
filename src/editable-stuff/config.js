// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Lazaro",
  middleName: "R.",
  lastName: "Diaz Lievano",
  message: "Passionate physicist exploring data science and quantum computing.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/LazaroR-u",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/lazarordiazlievano/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/lazaro.rdl/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lazaro-raul-diaz-lievano/",
    },
    {
      image: "fa-brands fa-medium",
      url: "https://medium.com/@lazaror",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/editable-stuff/lazaror.jpg"),
  imageSize: 375,
  message:
    "Hello there! I’m Lazaro Diaz, a 2024 Physics graduate from the Benemerita Autonomous University of Puebla, Mexico. I’m passionate about using cutting-edge technologies like data science, machine learning and quantum algorithms to drive advancements in High-Energy Physics. \n In my free time, I enjoy contributing to open-source projects and exploring the timeless ideas found in classic literature.",
  resume: "https://drive.google.com/file/d/1a-CXiQdudKMyvddBsQMB3LvgPQ24kOt_/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "LazaroR-u ", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/editable-stuff/lazaror.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/editable-stuff/lazaror.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "R", value: 70 },
    { name: "SQL", value: 75 },
    { name: "C++", value: 60 },
    { name: "Root", value: 60 },
    { name: "Wolfram Mathematica", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for a PhD in Physics position focused on classical and quantum computational methods on Experimental High Energy Physics. If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lazaro.raul.diaz.lievano@cern.ch",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Google Summer of Code Contributor',// Google Summer of Code
      companylogo: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/assets/img/gsoc.png"),
      date: 'May 2024 – Sep 2024',
    },
    {
      role: 'Quantum Open Source Foundation Mentorship Program',
      companylogo: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/assets/img/qosf.png"),
      date: 'April 2024 – July 2024',
    },
    {
      role: 'CMS Collaborator',
      companylogo: require("C:/Users/Lazaro Diaz/Documents/blog/home/src/assets/img/cern.png"),
      date: 'Dec 2023 – present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
