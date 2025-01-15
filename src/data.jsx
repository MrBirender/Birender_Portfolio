import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/cosmic.png";
import Work2 from "./assets/Fitfles_planner.png";
import Work3 from "./assets/fruitt.png";
import Work4 from "./assets/virtual.png";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Birender",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Yadav",
  },

  {
    id: 3,
    title: "Age : ",
    description: "25 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Banglore, Karnatka",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 9991239813",
  },

  {
    id: 8,
    title: "Email : ",
    description: "dev.birender@gmail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: "Months of <br /> Experience",
  },

  {
    id: 2,
    no: "6+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "19+",
    title: "Github <br /> Repositries",
  },

  {
    id: 4,
    no: "5+",
    title: " Certificates <br /> Awarded",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "Full Stack Web Development Course <span> Masai School </span>",
    desc: "Completed an intensive Full Stack Web Development course specializing in the MERN stack, with hands-on projects including dynamic web applications and database integration.",
  },
  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Graduation (B.A) <span> MDU University, Rohtak </span>",
    desc: "Focused on Physical Education, Geography, and Computer Studies, showcasing analytical thinking, problem-solving skills, and a technical mindset.",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "12th Grade <span> CBSE Board </span>",
    desc: "Excelled in core subjects including Physics, Chemistry, and Mathematics, developing a strong foundation for higher education.",
  },
  {
    id: 4,
    category: "experience",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "10th Grade <span> CBSE Board </span>",
    desc: "Achieved high distinction across all core subjects, reflecting strong academic performance and dedication.",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML & CSS",
    percentage: "85",
  },
  {
    id: 2,
    title: "JavaScript",
    percentage: "90",
  },
  {
    id: 3,
    title: "React",
    percentage: "88",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    percentage: "80",
  },
  {
    id: 5,
    title: "Node.js",
    percentage: "75",
  },
  {
    id: 6,
    title: "Express.js",
    percentage: "70",
  },
  {
    id: 7,
    title: "MongoDB",
    percentage: "65",
  },
  {
    id: 8,
    title: "Git & GitHub",
    percentage: "85",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://cosmicdaily1.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://fitflexplanner.netlify.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://dev-fruit-market.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://dev-virtual-r.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
