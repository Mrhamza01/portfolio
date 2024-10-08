import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    vu,school,
    mockinterview,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,aisumrizer,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,coursera,freecodecamp
  } from "../assets";

  const profiles = [
    {
      link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
    {
      link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
      icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    },
    {
      link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    },
    {
      link: "https://www.hackerrank.com/_shinchancode",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    {
      link:"https://dev.to/shinchancode",
      icon: hf,
    },
    {
      link:"https://www.holopin.io/@shinchancode#badges",
      icon: holopin,
    },
  ];

  const achievements = [
    {
      title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
    },
    {
      title: "Twice State level Table-Tennis Winner (2021 and 2022)",
    },
    {
      title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
    },
    {
      title: "Branch Head of Information Technology Department (2021 - 2022)",
    },
    {
      title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
    },
    {
      title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
    },
    {
      title: "Played Nationals in Throwball for U-14 category. (2015)",
    },
  ]
  
  const technologies = [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/480/000000/html-5.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/480/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/480/000000/javascript.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/480/000000/tailwindcss.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/480/000000/typescript.png",
    },
    {
      name: "React JS",
      icon: "https://img.icons8.com/color/480/000000/react-native.png",
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/color/480/000000/nextjs.png",
    },
    {
      name: "Laravel",
      icon: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=FFFFFF",
    },
    {
      name: "Prisma",
      icon: "https://img.icons8.com/?size=100&id=YKKmRFS8Utmm&format=png&color=000000",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/480/000000/mongodb.png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/color/480/000000/docker.png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/color/480/000000/git.png",
    },
    {
      name: "GraphQL",
      icon: "https://img.icons8.com/color/480/000000/graphql.png",
    },
    {
      name: "Vite",
      icon: "https://img.icons8.com/color/480/000000/vite.png",
    },
    // {
    //   name: "Shadcn",
    //   icon: "https://img.icons8.com/color/480/000000/shadcn.png",
    // },
    {
      name: "Material-UI",
      icon: "https://img.icons8.com/color/480/000000/material-ui.png",
    },
    // {
    //   name: "Google Cloud",
    //   icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    // },
    // {
    //   name: "C++",
    //   icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    // },
    // {
    //   name: "Bootstrap",
    //   icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    // },
  ];
  

  const list = [
    // {
    //   id: "java",
    //   title: "Java",
    // },
    // {
    //   id: "c++",
    //   title: "C++",
    // },
    {
      id: "web",
      title: "Web Dev",
    },
    // {
    //   id: "other",
    //   title: "Other",
    // },
  ];

  export const javaProject = [
    {
      name: "AI mock interviewer",
      description:
        "This project leverages cutting-edge technology to create a dynamic and user-friendly platform for interview preparation, offering personalized insights and recommendations to enhance users' performance in real interviews..",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "Next",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
      ],
      image: mockinterview,
      source_link: "https://mockinterviewer.vercel.app/",
      source_code_link: "https://github.com/Mrhamza01/mockinterviewer",
    },
    {
      name: "Snake Yaml",
      description:
        "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
      source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    },
    {
      name: "CRUD operations",
      description:
        "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/shinchancode/CRUD-Operation",
      source_code_link: "https://github.com/shinchancode/CRUD-Operation",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/shinchancode/byte-array-to-file",
      source_code_link: "https://github.com/shinchancode/byte-array-to-file",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/shinchancode/oneTomany-springboot",
      source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
    },
    {
      name: "OOP Lab",
      description:
        "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
      source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shinchancode/Trie-Data-structure",
      source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/shinchancode/Computer-Graphics",
      source_code_link: "https://github.com/shinchancode/Computer-Graphics",
    },
    
  ];
  
  export const webProject = [
    {
      name: "AI mock interviewer",
      description:
        "This project leverages cutting-edge technology to create a dynamic and user-friendly platform for interview preparation, offering personalized insights and recommendations to enhance users' performance in real interviews..",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
        {
          name: "Next",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
      ],
      image: mockinterview,
      source_link: "https://mockinterviewer.vercel.app/",
      source_code_link: "https://github.com/Mrhamza01/mockinterviewer",
    },
    {
      name: "AI summarizer",
      description:
        " I  built an AI summarizer that uses the GPT-4 model to summarize articles. It takes a link to an article and summarizes it into a shorter, more concise version. The summary is generated using natural language processing (NLP) techniques to identify the most important information in the article and generate a summary that captures the essence of the original content.",
      tags: [
        {
          name: "shadecn",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: aisumrizer,
      source_link: "https://shinchancode.github.io/React-Portfolio/",
      source_code_link: "https://github.com/shinchancode/React-Portfolio",
    },
    {
      name: "linktok full stack RESTfull API social media app Prototype",
      description:
        "linktok full stack RESTfull API social media applinktok full stack RESTfull API social media app LinkTok is a secure, full-stack social media app with a user-friendly frontend and a RESTful backend. It features robust authentication, local storage for media, and an array of tools like an admin dashboard, post scheduling, story creation, and a follow system. Users enjoy curated content and detailed analytics, all within a personalized ‘For You’ video page",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Next js",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: chitchat,
      source_link: "https://github.com/Mrhamza01/backendLinkTok",
      source_code_link: "https://github.com/Mrhamza01/frontendLinkTok",
    },
   
  ];
  
  export const otherProject = [
    {
      name: "Multilingual Multiple Choice Question Generation",
      description:
        "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "multilingual",
          color: "green-text-gradient",
        },
        {
          name: "BE_Project",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
      source_code_link: "https://github.com/shinchancode/Final-Year-Project",
    },

    {
      name: "DBMS Lab",
      description:
        "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
      tags: [
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "dbms",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: sql,
      source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
      source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    },
    {
      name: "SQL : Library Management System",
      description:
        "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "management",
          color: "green-text-gradient",
        },
        {
          name: "miniproject",
          color: "pink-text-gradient",
        },
      ],
      image: mini,
      source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
      source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    },
    {
      name: "Pyhton : Snake and Ladder",
      description:
        "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
      tags: [
        {
          name: "snake and ladder",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "CLI",
          color: "pink-text-gradient",
        },
      ],
      image: snl,
      source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
      source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    },
    
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Multi-Techno ERP Integrated Solutions",
      icon: bny,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      link: "",
      points: [
        "At Multi-Techno ERP Integrated Solutions, I am building a comprehensive ERP solution designed to help businesses streamline their operations, enhance efficiency, and foster growth. This solution aims to simplify complex workflows and empower businesses with powerful tools for better decision-making.",
      ],
      link: "https://www.linkedin.com/in/hamza-ghafoor/",
    },
    
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Computer Science ",
      // marks:
      //   "CGPA : 9.42 / 10",
      name: "Virtual university of Pakistan",
      year: "(2020 - 2024)",
      image: vu,
    },
    {
      degree: "Specialization",
      branch:
        "IBM Full Stack Software Developer",
      // marks:
      //   "CGPA : 9.42 / 10",
      name: "Coursera",
      year: "(Sep - 2023)",
      image: coursera,
    },
    {
      degree: "Certification",
      branch:
        "Back End Development and APIs",
      // marks:
      //   "CGPA : 9.42 / 10",
      name: "Free Code camp",
      year: "(Nov - 2023)",
      image: freecodecamp,
    },
    {
      degree: "Specialization",
      branch:
        "Google Digital Marketing & E-commerce ",
      // marks:
      //   "CGPA : 9.42 / 10",
      name: "Coursera",
      year: "(Nov - 2022)",
      image: coursera,
    },
    {
      degree: "Specialization",
      branch:
        "Google UX Design Specialization",
      // marks:
      //   "CGPA : 9.42 / 10",
      name: "Coursera",
      year: "(OCt - 2022)",
      image: coursera,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
