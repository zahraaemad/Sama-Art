import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List4 from "./list4";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog4({ open, onClose }) {
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
            <CloseIcon sx={{ background: "#white", color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent sx={{ background: "#f4f4f4" }}>
        <p>
          In this series, I used photos from the Palestinian archives of the
          first intifada in 1987 and the second intifada in 2000, in which
          women, children and youth participated. The flame began in this period
          and still burning to this day.I combined more than one scene together
          from different periods, creating one spirit for all of them.
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
        <List4 />
      </DialogContent>
    </Dialog>
  );
}

export default ArtDialog4;
