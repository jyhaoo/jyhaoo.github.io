export const Bio = {
  name: "Jason Hao",
  description:
    "I am a highly motivated and driven individual. I'm passionate about learning and always striving to grow. With a positive attitude and a growth mindset, I am ready to tackle challenges and contribute.",
  github:
    "https://github.com/jyhaoo?tab=overview&from=2024-01-01&to=2024-01-09",
  resume:
    "https://docs.google.com/document/d/1_vxDZJvqmRS6-32OVI0tYEuzrE3BaeubIrpzpoUZXu0/edit?usp=sharing",
};

export const experiences = [
  {
    id: 0,
    img: "Keysight",
    role: "Software R&D Engineer",
    company: "Keysight Technologies",
    date: "Jan 2022 - Present",
    desc: "Developed flexible test instrument and DUT plugins for automated testing of DUTs in regards to 5G, Designed and implemented test executive to run hardware and software diagnostics for 5G base station testing solution. Used pluggable architecture for scalable development and deployment of diagnostics tests, Demo and showcased instruments within Keysight’s 5G Testbed, Provided technical support and solutions to Aerospace and Defence customers",
    skills: ["Python", "5G Signaling", "C#"],
  },
  {
    id: 1,
    img: "AccesSOS",
    role: "React Developer",
    company: "accesSOS",
    date: "Jan 2021 - Feb 2022",
    desc: "Worked on the Text911 App and text911.info website",
    skills: ["ReactJS", "React Native", "NodeJs", "HTML", "CSS", "JavaScript"],
  },
];

export const projects = [
  {
    id: 0,
    title: "accesSOS text911.info map",
    date: "March 2021 - April 2021",
    description:
      "Built the Text911.info map which displays all the counties that have text to 911 capabilities. Features implemented: Added polygons on the map to represent the counties, color coated them based on whether they supported text to 911 capabilities, added search bar to zoom in to selected county, added loading icon, added popup of county name based on where the mouse cursor is",
    image: "text911infoMap",
    tags: ["React JS", "Redux", "Mapbox API"],
    category: "front-end web app",
    github: "https://github.com/jyhaoo",
    webapp: "https://text911.info/",
  },
  {
    id: 1,
    title: "Budget PWA",
    date: "March 2024",
    description:
      "Build a budget tracking PWA that utilizes Nextjs and supabase. Features include adding new expense, adding tags to expense, displaying expenses in a chart based on the month and storing all of this in supabase.",
    image: "Budget",
    tags: ["NextJS", "Supabase"],
    category: "front-end web app",
    github: "https://github.com/jyhaoo/budget",
    webapp: "https://github.com/jyhaoo/budget",
  },
];

export const education = [
  {
    id: 0,
    img: "UsfcaLogo",
    school: "University of San Francisco",
    date: "Aug 2017 - May 2021",
    grade: "3.80 GPA",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    id: 1,
    img: "BerkeleyLogo",
    school: "UC Berkeley Extensions ",
    date: "Dec 2021 - Jun 2022",
    grade: "A",
    degree: "Bootcamp Cybersecurity certificate",
    document:
      "I wanted to gain a better insight as to what goes into protecting the internet. This was all fueled from a class I took back in USF, cryptography",
  },
];
