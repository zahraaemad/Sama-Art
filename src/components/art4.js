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
        <p>   "انتفاضة الحجارة"</p>
        <p>
       
          During the Stone Intifada, there was no armed resistance;
          instead, Palestinians resorted to using stones as weapons,
          bravely confronting tanks and armored vehicles.
          The Intifada embodies the determination and will of
          the Palestinian people, with participation from children,
          the elderly, women, and youth. These images from the Palestinian
          archive of the two Intifadas serve to revive these scenes at all
          times and remind everyone of what Palestinians have done and
          continue to do to reclaim their land
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
