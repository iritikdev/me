import { Box, Container, Typography } from "@mui/material";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer(props) {
  return (
    <>

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
        <Typography color={"white"} display="flex" alignItems="center" gap={1}>No Copyright {new Date().getFullYear()} </Typography>
        <Box display={"flex"} gap={2} >
          <a href="https://github.com/iritikdev" target="_blank" rel="noopener noreferrer">  <FiGithub size={20} color="#ccd6f6" strokeWidth={2} /></a>
          <a href="https://www.linkedin.com/in/iritikdev" target="_blank" rel="noopener noreferrer"> <FiLinkedin size={20} color="#ccd6f6" strokeWidth={2} /></a>
       
       
        <FiTwitter size={20} color="#ccd6f6" strokeWidth={2} />
        </Box>
        <Box display={"flex"} >
          <Typography  fontFamily= "Sen Variable"
            color={"white"} mr={0.6}>Developed by</Typography>
          <Typography fontFamily= "Sen Variable" color={"white"}>Ritik Sharma</Typography>
        </Box>
      </Container>
    </Box>
    </>
  );
}

export default Footer;
