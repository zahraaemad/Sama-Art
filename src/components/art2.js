import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List2 from "./list2";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog2({ open, onClose }) {
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
    <p>soon</p>
        <List2 />
      </DialogContent>
    </Dialog>
  );
}

export default ArtDialog2;
