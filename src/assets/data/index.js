import { DiJavascript1, DiReact } from "react-icons/di";
import { SiMaterialui, SiNodedotjs, SiExpress } from "react-icons/si";
import { useTheme } from "@mui/material";

const theme = useTheme();

export const stack = [
  {
    id: 1,
    name: "JavaScript",
    icon: <DiJavascript1 color={theme.palette.blue[800]} size={16} />,
    color: "#fcdc00",
  },
  {
    id: 2,
    name: "React",
    icon: <DiReact color={theme.palette.blue[800]} size={16} />,
    color: "#61dafb",
  },
  {
    id: 3,
    name: "mui",
    icon: <SiMaterialui color={theme.palette.blue[800]} size={14} />,
    color: "#007fff",
  },
  {
    id: 4,
    name: "Node",
    icon: <SiNodedotjs color={theme.palette.blue[800]} size={14} />,
    color: "#026e00",
  },
  {
    id: 5,
    name: "Express",
    icon: <SiExpress color={theme.palette.blue[800]} size={14} />,
    color: "#259dff",
  },
];
