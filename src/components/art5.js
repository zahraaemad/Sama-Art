import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List5 from "./list5";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ArtDialog5({ open, onClose }) {
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
          Amidst an ongoing genocide, this body of work portrays the resilience
          of Gaza’s people as they fight for sustenance. Despite constant
          displacement, bombardment and the cutting-off of food and aid, the
          people of Gaza show remarkable resourcefulness and a fierce will to
          live. Using collage, these images capture makeshift ovens, inventive
          cooking methods, and communal meal preparations. Handwritten notes add
          a personal touch, highlighting the resilience and determination of a
          community under siege. This body of work presents a powerful narrative
          of strength and adaptability, and showcases the Gazan spirit’s
          unyielding defiance through their creative use of scarce resources.
          These acts of cooking and sharing meals become acts of resistance,
          underscoring that no matter the aggression they face, their spirit
          remains unbroken.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          You could order the prints from{" "}
          <a
            href="https://gulfphotoplus.com/collections/editions-palestine?filter.p.m.custom.author=Samaa+Emad"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            here
          </a>
        </p>
        <List5 />
      </DialogContent>
    </Dialog>
  );
}

export default ArtDialog5;
