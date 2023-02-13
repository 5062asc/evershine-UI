import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links } from "./Data";
import {
  Button,
  Stack,
  Avatar,
  Typography,
  Divider,
  Popover,
} from "@mui/material";
import logo from "./ev.jpg";
import "./Navbar.css";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openP = Boolean(anchorEl);
  const id = openP ? "simple-popover" : undefined;
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          {/* <h3>ChatBot</h3> */}
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              // sx={{ bgcolor: deepOrange[900] }}
              {...stringAvatar("Akhil S")}
              onClick={handleClick}
            />
          </Stack>
          <Popover
            id={id}
            open={openP}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "Center",
            }}
          >
            <Typography sx={{ m: 1 }} component="div">
              <div className="logout-popover">
                <Typography>"Akhil</Typography>
                <Typography>@gmail.com</Typography>
                <Divider style={{ paddingTop: "30%" }}></Divider>
                <Button varient="contained">Logout</Button>
              </div>
            </Typography>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
