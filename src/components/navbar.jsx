import React from "react";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
  useTheme,
  Typography,
  Slide,
  ListItem,
  List,
  Drawer,
} from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import AppButton from "./AppButton";
import { logo, resume } from "../assets/index";
import { styled } from "@mui/system";
import { RiArrowRightUpLine } from "react-icons/ri";

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({ target: window });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Image = styled("img")(({ theme }) => ({
  width: 42,
  [theme.breakpoints.up("sm")]: {
    width: 50,
  },
}));

const navItems = ["About", "Academy", "Blog", "Contact"];
const drawerWidth = 240;

function Navbar(props) {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          component={"nav"}
          sx={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.125)",

            px: {
              xs: 0.3,
              sm: 2,
            },
            py: {
              xs: 0.3,
              sm: 0.75,
            },
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Image src={logo} alt="logo" />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) => (
                // <Link to={`/#${item.toLowerCase()}`}>
                <Button
                  href={`/#${item.toLowerCase()}`}
                  key={item}
                  sx={{
                    color: "#fff",
                    fontSize: 12,
                    textTransform: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "300",
                      fontFamily: "Fira Code",
                      fontSize: 14,
                      pr: 0.75,
                      color: theme.palette.green.main,
                    }}
                  >{`0${index + 1}. `}</Typography>
                  <Typography
                    sx={{
                      pr: 1,
                      fontSize: 16,
                      fontWeight: "300",
                      fontFamily: "averta",
                      color: theme.palette.slate[200],
                      "&:hover": {
                        color: theme.palette.green.main,
                      },
                    }}
                  >{` ${item}`}</Typography>
                </Button>
                // </Link>
              ))}

              <a
                href={resume}
                download
                style={{
                  color: theme.palette.green.main,
                  marginLeft: 25,
                }}
              >
                <Button
                  sx={{
                    letterSpacing: 1.1,
                    backgroundColor: "#8244ff",
                    px: 2.5,
                    py: 0.8,
                    borderRadius: "25px",
                    fontSize: 11,
                    fontFamily: "inter",
                    color: "white",
                    "&:hover": { backgroundColor: "rgba(130, 68, 255, 0.8)" },
                  }}
                >
                  Resume
                </Button>
              </a>
            </Box>
            {/* Mobile menu start */}
            <Box
              sx={{
                display: {
                  xs: "inline-block",
                  sm: "none",
                },
              }}
            >
              <Button onClick={toggleDrawer(true)}>
                <BiMenuAltRight size={32} color={theme.palette.green.main} />
              </Button>
              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                sx={{
                  backgroundColor: "rgba(35, 53, 84, 0.33)",
                  backdropFilter: "blur(2.5px)",
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: theme.palette.blue[800],
                    color: theme.palette.slate[200],
                    justifyContent: "center",
                  },
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems : "center",
                    alignItems : "center",
                    rowGap: 3,
                  }}
                >
                  {navItems.map((navItem, index) => (
                    <ListItem
                      onClick={toggleDrawer(false)}
                      key={navItem}
                      disablePadding
                      sx={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent : "center",
                            alignItems : "center"
                      }}
                    >
                      <Button
                        href={`/#${navItem.toLowerCase()}`}
                        key={navItem}
                        sx={{
                          textTransform: "none",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "300",
                              fontFamily: "Fira Code",
                              fontSize: 14,
                              pr: 1,
                              color: theme.palette.green.main,
                            }}
                          >{`0${index + 1}. `}</Typography>
                          <Typography
                            sx={{
                              pr: 1,

                              fontSize: 15,
                              fontWeight: "300",
                              fontFamily: "Fira Code",
                              color: theme.palette.slate[200],
                              "&:hover": {
                                color: theme.palette.green.main,
                              },
                            }}
                          >{` ${navItem}`}</Typography>
                        </Box>
                      </Button>
                    </ListItem>
                  ))}
                  <a
                    href={resume}
                    download
                    style={{
                      color: theme.palette.green.main,
                      
                    }}
                  >
                    <Button
                      sx={{
                        letterSpacing: 1.1,
                        backgroundColor: "#8244ff",
                        px: 2.5,
                        py: 0.8,
                        borderRadius: "25px",
                        fontSize: 11,
                        fontFamily: "inter",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(130, 68, 255, 0.8)",
                        },
                      }}
                    >
                      Resume
                    </Button>
                  </a>
                </List>
              </Drawer>
            </Box>
            {/* Mobile menu end */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default Navbar;
