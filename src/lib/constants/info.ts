export interface experienceInfo {
  designation: string;
  company: string;
  dateRange: string;
  desc: string[];
}

export const experienceInfoArr: experienceInfo[] = [
  {
    designation: 'Software Engineer',
    company: 'Singapore Airlines',
    dateRange: 'Jun 2023 - Present',
    desc: [
    ],
  },
  {
    designation: 'Software Developer',
    company: 'WaveScan Technologies Pte. Ltd.',
    dateRange: 'June 2022 - April 2023',
    desc: [
      'Implemented and executed an offline-first Electron desktop application with a Svelte frontend for technicians to use in wall facade inspections, successfully launching the product for client use and maintaining it for 6 months and counting',
      'Revamped and enhanced an annotation and analysis page in React, utilising the WebGL-based vtk.js visualisation library to implement volumetric rendering of scanned data from wall facade inspections, accelerating the speed of loading large datasets by up to 300%',
      'Collaborated closely with designers and other software engineers, leveraging the Agile methodology to elevate user experience through multiple iterations and versions of the company flagship web applications',
      'Developed and deployed essential routes for a RESTful API-focused Python backend (utilising the FastAPI framework), while also seamlessly integrating the backend with a PostgreSQL database using SQLAlchemy',
      'Conducted unit and integration testing of the Python backend via pytest to create a suite of tests which covers all critical routes using a Test-Driven Development approach',
      'Presided over the mentorship of interns, imparting valuable knowledge and guidance for their professional growth, as well as organising and conducting of interviews with prospective interns',
    ],
  },
  {
    designation: 'Full-Stack Developer Intern',
    company: 'STUCK Design Pte. Ltd.',
    dateRange: 'May 2021 - September 2021',
    desc: [
      'Devised an interactive Unity app for iPad that delivers an immersive experience for children to explore and interact with artworks using intuitive touch gestures',
      'Cooperated closely with designers and testers, ensuring that design and user requirements were satisfactorily met through multiple iterations of the company’s iPad application software',
      'Implemented a Svelte web application that leverages vaccination status data to verify dine-in regulations in Singapore',
    ],
  },
  {
    designation: 'UI/UX Developer Intern',
    company: 'WaveScan Technologies Pte. Ltd.',
    dateRange: 'May 2020 - December 2020',
    desc: [
      'Engineered new features for a brownfield, client-facing Electron desktop application with React that does volumetric rendering, ensuring the readiness of the application for beta release',
      'Led the end-to-end Software Development Lifecycle (SDLC) for a web interface intended for a robotic scanner, from initial planning to ongoing maintenance, delivering a successful and reliable product',
      'Crafted technical documentation and user guides as well as streamlining development workflows by setting up simple deployment and maintenance processes for company products',
    ],
  },
  {
    designation: 'Undergraduate Teaching Assistant',
    company: 'National University of Singapore',
    dateRange: 'August 2019 - May 2022',
    desc: [
      'Mentored students in an introductory programming module, facilitating the learning of fundamental concepts such as data structures, and algorithms through weekly tutorials',
      'Spearheaded weekly sessions to instruct on the use of Unity for AR/VR development, while also providing consultation to students for Figma prototyping in UX/UI classes',
      'Worked closely with lecturers to enhance course materials and adeptly managed administrative responsibilities for 100+ students throughout each semester',
    ],
  },
];

export interface TimelineInfo {
  [year: number]: DescInfo[];
}

export interface DescInfo {
  desc: string[];
  dateRange: string;
}

export const timelineInfo: TimelineInfo = {
  1997: [{ desc: ['Born in Singapore'], dateRange: '' }],
  2015: [{ desc: ['Graduated from  Nanyang Junior College'], dateRange: '' }],
  2016: [{ desc: ['Went for National Service for 2 years'], dateRange: 'February' }],
  2018: [
    {
      desc: ['ORD from National Service on 15 Feb 2018'],
      dateRange: 'February',
    },
    {
      desc: ['Began my undergraduate studies at National University of Singapore (NUS)'],
      dateRange: 'August',
    },
  ],
  2019: [
    {
      desc: [
        'Took on responsibilities as an Undergraduate Teaching Assistant (TA)',
        'Taught CS1010S/X, CS3240, CS4240 modules over 3 years with 100+ students under my charge in total',
      ],
      dateRange: 'August 2019 - May 2022',
    },
  ],
  2020: [
    {
      desc: ['Started at WaveScan Technologies Pte. Ltd. as a UI/UX Developer Intern'],
      dateRange: 'May 2020 - December 2020',
    },
  ],
  2021: [
    {
      desc: ['Joined STUCK Design Pte. Ltd. as a Full-Stack Developer Intern'],
      dateRange: 'May 2021 - September 2021',
    },
  ],
  2022: [
    {
      desc: [
        'Graduated from National University of Singapore with a CAP of 4.33/5.00',
        'Obtained my Bachelors of Computing in Computer Science with Honours (Distinction)',
      ],
      dateRange: 'May',
    },
    {
      desc: ['Joined back WaveScan Technologies Pte. Ltd. as a full-time Software Engineer'],
      dateRange: 'June 2022 - April 2023',
    },
  ],
  2023: [
    {
      desc: ['Joined Singapore Airlines as a full-time Software Engineer'],
      dateRange: 'June 2023 - Present',
    },
  ],
};