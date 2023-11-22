import { DiJavascript1, DiReact } from "react-icons/di";
import { SiExpo, SiExpress, SiNodedotjs } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { theme } from "../theme";

export const aboutMe = [
    <p>
      Hello! 👋 My name is Ritik and I love to create things that live on the
      internet. My interest in <a className="link">web development 🌐 </a> started
      back in 2018 when I was in 2nd year of my diploma.
    </p>,
    "In my free time, I enjoy building stuff that live on internet. I believe in continuously learning and expanding my knowledge base to stay ahead in the field. ",
    "I am always looking for new opportunities to challenge myself and make a positive impact. Please feel free to explore my website to learn more about my work and connect with me.",
    "I have honed my skills and developed a strong understanding of following technology: ",
  ];
  export const techStack = [
    {
      id: 1,
      name: "JavaScript(ES6+)",
      icon: <DiJavascript1 color={theme.palette.green.main} size={16} />,
      color: "#fcdc00",
    },
  
    {
      id: 4,
      name: "Node.js/Express",
      icon: <SiNodedotjs color={theme.palette.green.main} size={14} />,
      color: "#026e00",
    },
    {
      id: 2,
      name: "React",
      icon: <DiReact color={theme.palette.green.main} size={16} />,
      color: "#61dafb",
    },
  
    {
      id: 5,
      name: "Python/Django",
      icon: <TbBrandPython color={theme.palette.green.main} size={16} />,
      color: "#259dff",
    },
    {
      id: 6,
      name: "Wordpress",
      icon: <SiExpress color={theme.palette.green.main} size={14} />,
      color: "#259dff",
    },
    {
      id: 6,
      name: "React Native",
      icon: <SiExpo color={theme.palette.green.main} size={14} />,
      color: "#259dff",
    },
  ];