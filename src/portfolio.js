import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Dheeraj Kumar",
  title: "Hi all, I'm Dheeraj",
  subTitle: emoji(
    "Software Developer & CS Undergrad passionate about building production-ready Machine Learning systems, algorithmic optimization, and scalable backend services. Turning data and physics-based models into real-world applications."
  ),
  resumeLink: "/updated_dheeraj_resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Dheerajkr09",
  linkedin: "https://www.linkedin.com/in/dheeraj-kumar-91a6b4303/",
  gmail: "nishukumar75321@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE, MACHINE LEARNING & SOFTWARE DEVELOPMENT",
  skills: [
    emoji("⚡ Developing end-to-end Machine Learning pipelines using Scikit-Learn, Pandas, and NumPy"),
    emoji("⚡ Building scalable backend REST APIs and web services using Python, Flask, and FastAPI"),
    emoji("⚡ Engineering modern web tools, browser extensions, and interactive user interfaces")
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bakhtiyarpur College of Engineering, Patna",
      logo: require("./assets/images/bceLogo.png"),
      subHeader: "B.Tech in Computer Science & Engineering (IoT Specialization)",
      duration: "Sept 2024 - May 2028",
      desc: "2nd Year Undergraduate focusing on Machine Learning, Smart Devices, and Cloud Connectivity.",
      descBullets: [
        "Affiliated with Bihar Engineering University (BEU)"
      ]
    },
    {
      schoolName: "R.D.S College, Muzaffarpur",
      logo: require("./assets/images/rdsLogo.png"),
      subHeader: "Higher Secondary (Class XII) - Science Stream (PCM)",
      duration: "2021 - 2023",
      desc: "Focus on Physics, Chemistry, and Mathematics.",
      descBullets: []
    },
    {
      schoolName: "Primus Public School, Muzaffarpur",
      logo: require("./assets/images/primusLogo.png"),
      subHeader: "Matriculation (Class X) - General Studies",
      duration: "2011 - 2021",
      desc: "General Studies (Mathematics, Science, Social Science).",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Science & Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Python & Backend Systems",
      progressPercentage: "80%"
    },
    {
      Stack: "Algorithms & Problem Solving",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend & Web Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Quantitative Research Job Simulation",
      company: "JPMorgan Chase & Co.",
      companylogo: require("./assets/images/jpmorganLogo.png"),
      date: "Virtual Simulation",
      desc: "Developed a natural gas pricing model using Linear Regression and modeled retail credit risk with Logistic Regression. Built a dynamic programming algorithm for optimal FICO score quantization.",
      descBullets: [
        "Commodity price extrapolation accounting for seasonal monthly fluctuations",
        "Probability of Default (PD) and expected loss financial modeling"
      ]
    },
    {
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia",
      companylogo: require("./assets/images/deloitteLogo.png"),
      date: "Virtual Simulation",
      desc: "Conducted practical data analytics, forensic data analysis, and dashboard visualization to extract key business insights.",
      descBullets: [
        "Data hygiene, cleaning, and exploratory data analysis using Python and Tableau",
        "Business intelligence reporting for strategic client decision-making"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Selected Machine Learning, Backend, and Browser Engineering Projects",
  projects: [
    {
      image: require("./assets/images/greenFleetLogo.jpg"),
      projectName: "Green Fleet Optimizer",
      projectDesc: "AI-driven fleet optimization system combining ML and Quantum Particle Swarm Optimization (QPSO) to minimize emissions and deployment costs. Built with Flask REST API and React dashboard.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://green-fleet-optimizer-production.up.railway.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Dheerajkr09/Green-Fleet-Optimizer"
        }
      ]
    },
        {
      image: require("./assets/images/planupLogo.png"),
      projectName: "PlanUp — Chrome Extension",
      projectDesc: "Lightweight productivity and task management browser tool engineered with JavaScript and Chrome Manifest V3 for seamless workflow and local storage synchronization.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://plan-up-jade.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/Dheerajkr09/PlanUP"
        }
      ]
    },
    {
      image: require("./assets/images/laptopLogo.png"),
      projectName: "laptop_price_predictor",
      projectDesc: "End-to-end machine learning regression pipeline with Scikit-learn, Pandas, and Streamlit deployed on Render to predict real-time laptop market pricing.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://laptop-price-estimator-69ye.onrender.com"
        },
        {
          name: "GitHub",
          url: "https://github.com/Dheerajkr09/laptop-price-estimator"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: "Licenses & Certifications",
  subtitle: "Official Simulations and Professional Certifications Completed",
  achievementsCards: [
    {
      title: "J.P. Morgan - Quantitative Research Job Simulation",
      subtitle: "",
      image: require("./assets/images/jpmorganLogo.png"),
      imageAlt: "JPMorgan Chase & Co.",
      footerLink: [
        {
          name: "View Certificate",
          url: process.env.PUBLIC_URL + "/jpmorgan_certificate.png"
        }
      ]
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      subtitle: "",
      image: require("./assets/images/deloitteLogo.png"),
      imageAlt: "Deloitte Australia",
      footerLink: [
        {
          name: "View Certificate",
          url: process.env.PUBLIC_URL + "/deloitte_certificate.png"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or want to collaborate? My inbox is always open.",
  number: "+91-6205921811",
  email_address: "nishukumar75321@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
  twitterDetails,
  isHireable,
  resumeSection
};
