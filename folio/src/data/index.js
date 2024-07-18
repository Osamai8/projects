import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "SDE-1: Reactjs Developer",
    company_name: "Dhwani Rural Information Systems Pvt. Ltd.",
    date: "June 2022 - Present",
    details: [
      "Pioneered the integration of cutting-edge features, such as <span style='color: white;'>real-time data updates</span> and <span style='color: white;'>advanced state management</span>, significantly improving performance and user satisfaction.",
      "Hatched high-quality educational platform for clients including <span style='color: white;'>Amazon and Capgemini</span>.",
      "Expanded my knowledge to include backend technologies such as <span style='color: white;'>Node.js, Express.js, and MongoDB</span>, enhancing my ability to work on full-stack projects.",
    ],
  },
  {
    title: "Reactjs Developer(Intern)",
    company_name: "Dhwani Rural Information Systems Pvt. Ltd.",
    date: "March 2022 - May 2022",
    details: [
      "Learned and developed applications using <span style='color: white;'>React.js</span>, gaining valuable hands-on experience in frontend development",
      "Contributed to the product development of <span style='color: white;'>mForm</span>, a company's product focused on providing innovative solutions for form creation and management",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  }
];

const portfolio = [
  {
    name: "Stripe",
    description:
      "A dynamic e-commerce website using Next.js, Prisma, and DaisyUI, integrated with a Stripe payment gateway. Utilized Framer Motion for engaging animations and Zustand for state management.",
    url: "https://stripeecom-osamas-projects-a711643a.vercel.app/",
    image: '/project/stripe.png'
  },
  {
    name: "IGNITE",
    description:
      "A game search website using the RAWG.io API to display comprehensive video game information. Features include a trending games list, detailed game descriptions, and various categories for exploration.",
    url: "https://osamai8.github.io/home/",
    image: '/project/ignite.png'
  },

];

export { experiences, portfolio };

