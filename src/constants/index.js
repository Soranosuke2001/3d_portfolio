import {
  tinyslice,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  frontend,
  networking,
  game,
  nextjs,
  prisma,
  python,
  bcit,
  keg,
  studying,
  network,
  flappybird,
  aimtrainer,
  coffeeshops,
  redext,
  noimage,
  airbnext,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    link: "#about",
  },
  {
    id: "projects",
    title: "Projects",
    link: "#projects",
  },
  {
    id: "work",
    title: "Work",
    link: "#work",
  },
  {
    id: "contact",
    title: "Contact",
    link: "#contact",
  },
  {
    id: "github",
    title: "GitHub",
    link: "https://github.com/Soranosuke2001",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/sora-schlegel-0289591b0/",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Networking",
    icon: networking,
  },
  {
    title: "Pygame Developer",
    icon: game,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    id: 1,
    title: "Next JS",
    icon: nextjs,
  },
  {
    id: 2,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 5,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 6,
    name: "Three JS",
    icon: threejs,
  },
  {
    id: 7,
    name: "Python",
    icon: python,
  },
  {
    id: 8,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 9,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 11,
    name: "Prisma",
    icon: prisma,
  },
  {
    id: 12,
    name: "git",
    icon: git,
  },
  {
    id: 13,
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "CIT Student",
    company_name: "BCIT",
    icon: bcit,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Experienced working with clients and teammates to troubleshoot the BCIT Student Association's website hosted on WordPress",
      "Studied web development fundamentals including, HTML, CSS and JavaScript",
      "Designed and built a relational database to manage students, student grades, enrolled classes and assigned instructors",
      "Developed a spending tracker application using HTML, CSS, Bootstrap to build the user interface, and Python Flask to manage all APIs",
      "Utilized Git to manage and track ",
      "Studied and utilized different project management methodologies including, Agile, Scrum, and Waterfall methodology",
      "Constructed a networking router which includes DHCP, NAT, DNS and packet filtering routers along side 4 nodes",
      "Built a FlappyBird clone using Pygame and incorporated the OOP concept",
    ],
  },
  {
    title: "Self Studying",
    company_name: "N/A",
    icon: studying,
    iconBg: "#E6DEDD",
    date: "June 2021 - Present",
    points: [
      "Currently developing a reddit clone, built using Next.js, TypeScript, Tailwind CSS, and Prisma",
      "Built a Netflix clone using, Next.js with JWT to securely manage login states and user credentials",
      "Built a basic Twitter clone using, the T3 stack and Prisma",
      "Built a CoffeeShop app using, Nextjs to scan the user's location and to provide nearby Coffee shops",
    ],
  },
  {
    title: "Kitchen Cook",
    company_name: "The Keg",
    icon: keg,
    iconBg: "#383E56",
    date: "June 2022 - August 2023",
    points: [
      "Training new kitchen cooks on various stations which included micro managing each individual for efficient workflow",
      "Calculated, documented and distributed the tip pool for all kitchen staff each week using Excel",
      "Hosted kitchen staff meetings to discuss any problems or issues faced in previous weeks or months",
      "Preparing and setting up kitchen before opening, which included food quality checks",
    ],
  },
  {
    title: "ECET Student",
    company_name: "BCIT",
    icon: bcit,
    iconBg: "#383E56",
    date: "Sept 2019 - Feb 2021",
    points: [
      "Studied the basic fundamentals to C programming, Python and VHDL",
      "Configured a microcontroller to build a small vehicle controlled via bluetooth",
      "Utilized AutoCAD to design and build a power supply",
      "Analyzed and design circuit diagrams and brainstormed the expected outcome then physically tested the circuit",
      "The program was not completed since I found my passion for coding more than designing circuits",
    ],
  },
];

const projects = [
  {
    name: "Redext",
    description:
      "A Reddit clone built using Next.js. Users are able to create communities, posts, and comments. Users are also able to upvote/downvote on comments and posts.",
    status: "Ongoing",
    date: "",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "planetscale",
        color: "blue-text-gradient",
      },
    ],
    image: redext,
    source_Code: "github",
    source_code_link: "https://github.com/Soranosuke2001/Redext",
    live_Link: "https://redext.vercel.app/",
  },
  {
    name: "Discover Coffee Shops",
    description:
      "Web application that enables users to view nearby coffee shops. The site will request for location access then search for all coffee shops near the user.",
    status: "Completed",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: coffeeshops,
    source_Code: "github",
    source_code_link: "https://github.com/Soranosuke2001/CoffeeShop-App",
    live_Link: "https://discover-coffee-shops-two.vercel.app/",
  },
  {
    name: "Airbnext",
    description:
      "Airbnb clone built using Next.js. Users are able to search through various housing options and filter through all postings. Users can also book the housing and other users will not be able to select the booked dates.",
    status: "Completed",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: airbnext,
    source_Code: "github",
    source_code_link: "https://github.com/Soranosuke2001/AirbNext-App",
    live_Link: null,
  },
  {
    name: "TinySlice",
    description:
      "Web based spending tracker application. This project was completed in a team setting and following the scrum methodology. The main objective was to experience and understand the flow of the Scrum methodology.",
    status: "Completed",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tinyslice,
    source_Code: "github",
    source_code_link: "https://github.com/Gavin-Sharma/Tinyslice",
    live_Link: null,
  },
  {
    name: "React Meetup",
    description:
      "Web based spending tracker application. This project was completed in a team setting and following the scrum methodology. The main objective was to experience and understand the flow of the Scrum methodology.",
    status: "Completed",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: noimage,
    source_Code: "github",
    source_code_link: "https://github.com/Soranosuke2001/React-Meetup",
    live_Link: null,
  },
];

const otherProjects = [
  {
    name: "Flappy Bird",
    description:
      "A Flappy Bird clone built using Pygame. The objective of this project was to test my OOP skills and to learn the fundamentals of creating a game using Python.",
    status: "Completed",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: flappybird,
    source_Code: "github",
    source_code_link: "https://github.com/Soranosuke2001/FlappyBird_Pygame.git",
    live_Link: null,
  },
  {
    name: "Router Project",
    description:
      "This was an assignment from a networking class. The purpose was to build a fully functional network which includes, 4 nodes and multiple routers using NAT, DNS, DHCP and packet filtering.",
    status: "Completed",
    tags: [
      {
        name: "Linux",
        color: "blue-text-gradient",
      },
      {
        name: "Bash",
        color: "green-text-gradient",
      },
    ],
    image: network,
    source_Code: "github",
    source_code_link: null,
    live_Link: null,
  },
  {
    name: "Aim Trainer Prototype Project",
    description:
      "This was an assignment from a UX/UI class. The objective of this project was to learn the fundamentals of Figma and to learn the basic workflow of a UX/UI designer. We were able to conduct user testings using the prototype.",
    status: "Completed",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: aimtrainer,
    source_Code: "figma",
    source_code_link:
      "https://www.figma.com/file/i61xJ8vsTwPzRJO88MNCpy/2811-Digital-User-Flow?type=design&node-id=0%3A1&mode=design&t=lqUxltxiJXZBi0JW-1",
    live_Link:
      "https://www.figma.com/proto/i61xJ8vsTwPzRJO88MNCpy/2811-Digital-User-Flow?type=design&node-id=2-4&t=I7yzjXa5QxUz7PV4-1&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A4&mode=design",
  },
];

export { services, technologies, experiences, projects, otherProjects };
