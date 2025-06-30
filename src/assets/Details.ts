// import aauMin from "@/assets/icons/aau.min.webp";
// import aau from "@/assets/icons/aau.webp";
// import enseeihtMin from "@/assets/icons/enseeiht.min.webp";
// import enseeiht from "@/assets/icons/enseeiht.webp";
// import escapeMin from "@/assets/icons/escape.min.webp";
// import escape from "@/assets/icons/escape.webp";
// import tauniqoMin from "@/assets/icons/tauniqo.min.webp";
// import tauniqo from "@/assets/icons/tauniqo.webp";
// import kanopMin from "@/assets/icons/kanop.min.webp";
// import kanop from "@/assets/icons/kanop.webp";
// import lfdcMin from "@/assets/icons/lfdc.min.webp";
// import lfdc from "@/assets/icons/lfdc.webp";

import wgu from "@/assets/icons/wgu.webp";
import wguMin from "@/assets/icons/wgu.min.webp";
import harper from "@/assets/icons/harper.webp";
import harperMin from "@/assets/icons/harper.min.webp";
import websurfing from "@/assets/icons/websurfing.webp";
import websurfingMin from "@/assets/icons/websurfing.min.webp";

const details = {
  name: {
    first: "Sara",
    last: "Khan",
    nickname: "SaraKhan",
  },
  title: "Software Engineer • AI Builder • Startup Developer",
  biography: "I'm an 18-year-old software engineering student at WGU (graduating May 2026) and a Junior Software Developer Intern at WebSurfing Studios. I build AI-powered tools, full-stack web apps, and startup MVPs with a focus on impactful design, future-facing systems, and user-first interfaces.",
  education: [
    {
      school: "Western Governors University",
      url: "https://www.wgu.edu/",
      icon: wgu,
      iconMin: wguMin,
      location: "Online",
      degree: "Bachelor of Science",
      major: "Computer Science",
      start: "Aug 2025",
      end: "May 2026",
    },
    {
      school: "Harper College",
      url: "https://www.harpercollege.edu/",
      icon: harper,
      iconMin: harperMin,
      location: "Palatine, IL",
      degree: "Associate of Applied Science",
      major: "Information Systems",
      start: "Aug 2023",
      end: "May 2025",
    },
  ],
  experience: [
    {
      company: "WebSurfing Studios",
      url: "https://websurfingstudios.com/",
      icon: websurfing,
      iconMin: websurfingMin,
      location: "Remote",
      contract: "Internship",
      position: "Junior Software Developer",
      start: "Jan 2025",
      end: "Present",
      description: "Building full-stack web applications and contributing to innovative software solutions." as string | string[],
      skills: [
        "React",
        "Node.js",
        "TypeScript",
        "Git",
        "Agile Development",
      ],
    },
  ],
  languages: [
    {
      name: "English",
      level: "Native",
      native: true,
    },
    {
      name: "Urdu",
      level: "Fluent",
    },
    {
      name: "Hindi",
      level: "Conversational",
    },
  ],
  contact: {
    location: "Chicago, IL",
    email: "saraqhan7@gmail.com",
    phone: "+1 (414) 666-3301",
    website: "https://sara-portfolio-orcin.vercel.app/",
    linkedin: "https://linkedin.com/in/saraqhan7",
    github: "https://github.com/sarakhan7",
    researchgate: "",
    gitlab: "",
    deviantart: "",
  },
};

export default details;
