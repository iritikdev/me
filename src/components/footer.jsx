import { Box, Container, Typography } from "@mui/material";
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer(props) {
  return (
    <>
    {/* <Box display={"flex"} justifyContent={"center"} position={"relative"} >
      <Box sx={{width : "100px", height: "100px", bgcolor : "violet.main", position: "absolute", top: "-1px", borderRadius:"100%", filter:"blur(16px)", overflowY: "hidden" }} />
    </Box> */}
    

    <Box
      sx={{
        zIndex : -1,
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderTop: "1px solid rgba(255, 255, 255, 0.125)",
        py: 5,
      }}
    >
      <Container sx={{display:"flex", justifyContent: "space-between", flexDirection:{xs: "column", sm: "row"}, alignItems:"center", gap:2}}>
        <Typography color={"white"} display="flex" alignItems="center" gap={1}><AiOutlineCopyrightCircle /> Ritik Sharma</Typography>
        <Box display={"flex"} gap={2} >
        <FiGithub size={20} color="#ccd6f6" strokeWidth={2} />
        <FiLinkedin size={20} color="#ccd6f6" strokeWidth={2} />
        <FiTwitter size={20} color="#ccd6f6" strokeWidth={2} />
        </Box>
        <Box display={"flex"} gap={2}>
          <Typography color={"white"}>Terms of Use</Typography>
          <Typography color={"white"}>Privacy Policy</Typography>
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default Footer;
