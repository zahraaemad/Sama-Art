import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List1 from "./list1";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog1({ open, onClose }) {
  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <AppBar sx={{ position: "relative", background: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon sx={{ background: "#c10000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ background: "#f4f4f4" }}>
        <p>
          In this series, I have selected pictures from the Palestinian archive
          for the period before the Nakba. These are pictures of daily practices
          carried out by Palestinians in their villages, as a kind of archive of
          life before the Nakba and the clear Palestinian identity of the place
          and people as well. I have included maps of these villages and their
          old names that were changed after the occupation.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          You could order the prints from{" "}
          <a
            href="https://gulfphotoplus.com/collections/editions-palestine?filter.p.m.custom.author=Samaa+Emad"
            target="_blank"
            style={{ color: "black" }}
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <List1 />
      </DialogContent>
    </Dialog>
  );
}

export default ArtDialog1;
